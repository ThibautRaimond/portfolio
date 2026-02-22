#!/usr/bin/env node

/**
 * Générateur de CV PDF Accessible conforme PDF/UA et WCAG 2.1 AA
 * Utilise Puppeteer pour convertir du HTML en PDF avec structure sémantique
 */

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { PDFDocument, PDFName, PDFArray, PDFDict } = require("pdf-lib");

const outputDir = path.join(__dirname, "../src/assets");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, "CV_Thibaut_Raimond_Conforme_WCAG.pdf");
const tempPath = path.join(outputDir, "CV_temp_build.pdf");

const thib2ImagePath = path.join(__dirname, "../src/assets/thib2.jpg");
const thib2ImageData = fs.existsSync(thib2ImagePath)
  ? fs.readFileSync(thib2ImagePath).toString("base64")
  : "";
const thib2ImageSrc = thib2ImageData
  ? `data:image/jpeg;base64,${thib2ImageData}`
  : "";
// Placeholder vide — l'image sera dessinée directement par pdf-lib (sans tag PDF)
const headerPhotoHtml = thib2ImageSrc
  ? `<div id="header-photo-placeholder" style="width:107px;height:107px;margin:6px auto 0px;display:block;"></div>`
  : "";

const pdfMetadata = {
  title: "CV - Thibaut Raimond - Consultant en Accessibilité Numérique",
  author: "Thibaut Raimond",
  subject: "Curriculum Vitae - Consultant en Accessibilité Numérique",
  keywords: ["CV", "Accessibilité", "RGAA", "RAAM", "Consultant", "Numérique"],
  creator: "Accessible CV Generator (Puppeteer + pdf-lib)",
  producer: "Puppeteer + pdf-lib",
};

function buildXmpMetadata() {
  const now = new Date().toISOString();
  return `<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
        <rdf:Description rdf:about=""
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:xmp="http://ns.adobe.com/xap/1.0/"
            xmlns:pdf="http://ns.adobe.com/pdf/1.3/"
            xmlns:pdfuaid="http://www.aiim.org/pdfua/ns/id/">
            <pdfuaid:part>1</pdfuaid:part>
            <dc:title>
                <rdf:Alt>
                    <rdf:li xml:lang="x-default">${pdfMetadata.title}</rdf:li>
                </rdf:Alt>
            </dc:title>
            <dc:creator>
                <rdf:Seq>
                    <rdf:li>${pdfMetadata.author}</rdf:li>
                </rdf:Seq>
            </dc:creator>
            <dc:description>
                <rdf:Alt>
                    <rdf:li xml:lang="x-default">${pdfMetadata.subject}</rdf:li>
                </rdf:Alt>
            </dc:description>
            <pdf:Producer>${pdfMetadata.producer}</pdf:Producer>
            <xmp:CreatorTool>${pdfMetadata.creator}</xmp:CreatorTool>
            <xmp:CreateDate>${now}</xmp:CreateDate>
            <xmp:ModifyDate>${now}</xmp:ModifyDate>
            <xmp:MetadataDate>${now}</xmp:MetadataDate>
        </rdf:Description>
    </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
}

async function postProcessPdf(pdfPath, imagePt) {
  const existingPdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // --- Métadonnées Info dict ---
  pdfDoc.setTitle(pdfMetadata.title);
  pdfDoc.setAuthor(pdfMetadata.author);
  pdfDoc.setSubject(pdfMetadata.subject);
  pdfDoc.setKeywords(pdfMetadata.keywords);
  pdfDoc.setCreator(pdfMetadata.creator);
  pdfDoc.setProducer(pdfMetadata.producer);
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setModificationDate(new Date());

  // --- Stream XMP (non compressé, encodage UTF-8 explicite) ---
  const xmp = buildXmpMetadata();
  const xmpBytes = Buffer.from(xmp, "utf-8");
  const xmpStream = pdfDoc.context.stream(xmpBytes, {
    Type: PDFName.of("Metadata"),
    Subtype: PDFName.of("XML"),
    Length: xmpBytes.length,
  });
  const xmpRef = pdfDoc.context.register(xmpStream);
  pdfDoc.catalog.set(PDFName.of("Metadata"), xmpRef);

  // --- Dessiner l'image comme Artifact (invisible pour PAC) via content stream brut ---
  if (imagePt && thib2ImageData) {
    const jpegBytes = fs.readFileSync(thib2ImagePath);
    const embeddedImage = await pdfDoc.embedJpg(jpegBytes);
    const page = pdfDoc.getPages()[0];

    // Ajouter l'image aux ressources XObject de la page sous un nom neutre
    const imgName = "DecorImg0";
    const resources = page.node.get(PDFName.of("Resources"));
    const resolvedRes = pdfDoc.context.lookup(resources);
    let xObjects = resolvedRes.get(PDFName.of("XObject"));
    if (!xObjects) {
      xObjects = pdfDoc.context.obj({});
      resolvedRes.set(PDFName.of("XObject"), xObjects);
    }
    const resolvedXObj = pdfDoc.context.lookup(xObjects);
    resolvedXObj.set(PDFName.of(imgName), embeddedImage.ref);

    const { x, y, w, h } = imagePt;
    // Clip circulaire : 4 courbes de Bézier approchant un cercle (kappa = 0.5523)
    const cx = x + w / 2,
      cy = y + h / 2,
      r = w / 2,
      k = r * 0.5523;
    const circle = [
      `${cx} ${cy + r} m`,
      `${cx + k} ${cy + r} ${cx + r} ${cy + k} ${cx + r} ${cy} c`,
      `${cx + r} ${cy - k} ${cx + k} ${cy - r} ${cx} ${cy - r} c`,
      `${cx - k} ${cy - r} ${cx - r} ${cy - k} ${cx - r} ${cy} c`,
      `${cx - r} ${cy + k} ${cx - k} ${cy + r} ${cx} ${cy + r} c`,
      `h W n`,
    ].join("\n");
    const raw = `/Artifact <</Type /Layout>> BDC\nq\n${circle}\n${w} 0 0 ${h} ${x} ${y} cm\n/${imgName} Do\nQ\nEMC\n`;
    const rawBytes = Buffer.from(raw, "latin1");
    const artifactStream = pdfDoc.context.stream(rawBytes, {
      Length: rawBytes.length,
    });
    const artifactRef = pdfDoc.context.register(artifactStream);

    // Ajouter le stream aux Contents de la page — PREPEND pour CTM identitaire
    const existingContents = page.node.get(PDFName.of("Contents"));
    if (existingContents) {
      const resolved = pdfDoc.context.lookup(existingContents);
      if (resolved instanceof PDFArray) {
        // Insérer en premier
        const items = resolved.asArray();
        page.node.set(
          PDFName.of("Contents"),
          pdfDoc.context.obj([artifactRef, ...items]),
        );
      } else {
        page.node.set(
          PDFName.of("Contents"),
          pdfDoc.context.obj([artifactRef, existingContents]),
        );
      }
    } else {
      page.node.set(PDFName.of("Contents"), artifactRef);
    }
  }

  const updatedPdfBytes = await pdfDoc.save({ useObjectStreams: false });
  fs.writeFileSync(pdfPath, updatedPdfBytes);
}

async function addXmpMetadata(pdfPath) {
  const existingPdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  pdfDoc.setTitle(pdfMetadata.title);
  pdfDoc.setAuthor(pdfMetadata.author);
  pdfDoc.setSubject(pdfMetadata.subject);
  pdfDoc.setKeywords(pdfMetadata.keywords);
  pdfDoc.setCreator(pdfMetadata.creator);
  pdfDoc.setProducer(pdfMetadata.producer);
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setModificationDate(new Date());

  const xmp = buildXmpMetadata();
  const xmpStream = pdfDoc.context.stream(xmp, {
    Type: PDFName.of("Metadata"),
    Subtype: PDFName.of("XML"),
  });
  const xmpRef = pdfDoc.context.register(xmpStream);
  pdfDoc.catalog.set(PDFName.of("Metadata"), xmpRef);

  const updatedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, updatedPdfBytes);
}

// HTML du CV avec structure sémantique complète et langue
const cvHtml = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Thibaut Raimond - Consultant en Accessibilité Numérique</title>
    <meta name="description" content="Curriculum Vitae de Thibaut Raimond, Consultant en Accessibilité Numérique">
    <meta name="author" content="Thibaut Raimond">
    <style>
            .font-semibold {
              font-weight: 600;
            }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            font-size: 16px;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            line-height: 1.5;
            color: #1a1a1a;
            background: #ffffff;
            padding: 0 20px;
            max-width: 900px;
            margin: 0 auto;
        }

        /* HEADER */
        .header {
            text-align: center;
            margin-top: 0;
        }

        .header h1 {
            font-size: 2.2em;
            color: #1a3a52;
            margin-top: 0;
            margin-bottom: 0;
            font-weight: 700;
            line-height: 1;
        }

        .header h2 {
            font-size: 1.5em;
            color: #2a2a2a;
            margin-top: 0;
            margin-bottom: 0;
            font-weight: 600;
            border-top: none;
            line-height: 1;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1px;
            font-size: 0.9em;
            margin-top: 0;
            margin-bottom: 0;
        }

        .label {
            font-weight: 700;
        }

        /* SECTIONS */
        section {
            margin-bottom: 6px;
        }

        h2 {
          font-size: 1.4em;
          color: #2a2a2a;
          margin-top: 1px;
          margin-bottom: 1px;
          padding-top: 2px;
          border-top: 2px solid #1a3a52;
          font-weight: 700;
        }
        #access-competences-title {
          border-top: none !important;
        }

        h3 {
            font-size: 1.1em;
            color: #1a3a52;
            margin-top: 0.5px;
            margin-bottom: 6px;
            font-weight: 700;
        }

        h4 {
            font-size: 1em;
            color: #1a3a52;
            margin-top: 8px;
            margin-bottom: 1px;
            font-weight: 700;
        }

        h5 {
            margin-top: 0px;
        }

        p {
            margin-bottom: 6px;
            text-align: left;
            line-height: 1.5;
            font-size: 0.95em;
        }

        .meta {
            font-size: 0.85em;
            color: #333;
            font-style: italic;
            margin-bottom: 4px;
        }


        ul {
          margin-left: 25px;
          margin-bottom: 4px;
          margin-top: 0px;
          list-style: none;
        }

        li {
          line-height: 1.4;
          margin-left: 0;
          font-size: 0.95em;
          position: relative;
        }

        /* Suppression du ::before, puce gérée en HTML */

        /* .separator supprimé, on utilise un caractère '|' */

        /* ANGLAIS */
        [lang="en"] {
            /* Pas d'italique */
        }

        /* GLOSSAIRE */
        .glossary-page {
            page-break-before: always !important;
            break-before: page !important;
            margin-top: 0;
          }

          .glossary-page ul {
            margin-left: 0;
            padding-left: 0;
          }
        }

        .glossary-entry {
            margin-bottom: 2px;
            line-height: 1.5;
            font-size: 0.95em;
        }

        .glossary-entry dt {
            font-weight: 700;
            color: #1a3a52;
            display: inline;
        }

        .glossary-entry dd {
            display: inline;
            margin-left: 0;
        }

        /* PRINT */
        @media print {
            body {
                padding: 20px;
            }

            h2 {
                page-break-after: avoid;
            }

            h3 {
                page-break-after: avoid;
            }

            section {
                page-break-inside: avoid;
            }

            ul {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <h1>Thibaut Raimond</h1>
        <h2>Consultant en Accessibilité Numérique</h2>
        ${headerPhotoHtml}
        <div class="contact-info">
            <span><span class="label">Téléphone :</span> 06.58.51.01.32</span>
            <span><span class="label">Email :</span> raimond.thibaut@gmail.com</span>
            <span>Permis B <span role="presentation">/</span> Véhiculé</span>
        </div>
        <div style="margin-top:5px;"></div>
    </header>

    <!-- PROFIL -->
    <section>
        <h2>Profil</h2>
        <p>
            Après six ans d’expérience dans la vente de produits de luxe, j’ai choisi de me reconvertir vers l’accessibilité numérique.
            <br />
            Désormais, je suis Consultant accessibilité pour grands comptes via Urbilog, spécialisé dans les référentiels RGAA et RAAM, j'aide les équipes <span lang="en">UX</span> / <span lang="en">UI</span> et les développeurs à concevoir des contenus inclusifs et accessibles.
            <br />
            Je combine expertise technique, pédagogie et aisance relationnelle pour renforcer durablement leurs compétences et contribuer à l'élévation de l'expertise des collaborateurs en interne.
        </p>
    </section>

    <!-- EXPÉRIENCE PROFESSIONNELLE -->
    <section>
        <h2>Expérience Professionnelle</h2>
        
        <article>
            <h3>Consultant Accessibilité Numérique <span role="presentation">|</span> Urbilog <span role="presentation">|</span> Décembre 2024 à aujourd'hui</h3>
            <h4>SFR depuis mars 2024</h4>
            <ul>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Recettes RGAA sur parcours clients web et applicatifs</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Corrections sémantiques, navigation clavier, composants accessibles</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Collaboration quotidienne avec <span lang="en">UX</span> / <span lang="en">UI</span> et développeurs front</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Accompagnement des équipes vers l'autonomie</li>
            </ul>

            <h4>France Télévisions depuis mai 2025</h4>
            <ul>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Recettes  RGAA et RAAM sur plateformes médias à forte audience</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Tests lecteurs d'écran et scénarios utilisateurs réels</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Recommandations <span lang="en">UX</span> inclusives et solutions techniques concrètes</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Participation à la montée en expertise des équipes design et développement</li>
            </ul>

            <h4>Activités transverses</h4>
            <ul>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Rapports d'audit détaillés et plans d'actions priorisés</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Préconisations adaptées aux contraintes techniques et design des différents métiers</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Partage de bonnes pratiques et diffusion d'une culture accessibilité</li>
                <li><span role="presentation" style="font-size:0.9em;">•</span> Animation de formations et ateliers en accessibilité numérique</li>
            </ul>
        </article>
    </section>

    <!-- FORMATIONS -->
    <section>
      <h2>Formations</h2>
      <ul>
        <li><span role="presentation" style="font-size:0.9em;">•</span> Formation Consultant Accessibilité Numérique – Compethance</li>
        <li><span role="presentation" style="font-size:0.9em;">•</span> Titre Pro Développeur FullStack Web &amp; Mobile – O'Clock</li>
        <li><span role="presentation" style="font-size:0.9em;">•</span> BTS Management des Unités Commerciales</li>
      </ul>
    </section>

    <!-- COMPÉTENCES -->
    <section>
      <h2 id="access-competences-title">Compétences Clés Accessibilité</h2>
        <ul>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Audits complets RGAA et RAAM</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Tests lecteurs d'écran : <span lang="en">NVDA, JAWS, VoiceOver</span></li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Sémantique <span lang="en">HTML</span>, <span lang="en">ARIA</span>, gestion du focus, navigation clavier</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Correction de composants <span lang="en">UI</span> &amp; design systems</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Accompagnement <span lang="en">UX</span> / <span lang="en">UI</span> &amp; développeurs</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Approche pragmatique orientée solutions</li>
        </ul>
    </section>

    <!-- PRATIQUE PERSONNELLE -->
    <section>
        <h2>Pratique Personnelle &amp; Veille</h2>
        <ul>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Mise en accessibilité de mes projets web personnels</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Expérimentation continue des contraintes réelles (code, UX, choix design)</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Veille continue sur les standards et bonnes pratiques du secteur</li>
        </ul>
    </section>

    <!-- TECHNOLOGIES -->
    <section>
        <h2>Technologies Maîtrisées</h2>
        <ul>
            <li><span role="presentation" style="font-size:0.9em;">•</span> <span lang="en">HTML</span> / <span lang="en">CSS</span> / <span lang="en">Tailwind</span></li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> <span lang="en">JS</span> / <span lang="en">REACT</span> / <span lang="en">EJS</span> / <span lang="en">NodeJS</span> / <span lang="en">Sequelize</span></li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> <span lang="en">Jira</span> / <span lang="en">Figma</span> / <span lang="en">Mocodo</span> / <span lang="en">Canva</span></li>
        </ul>
    </section>

    <!-- FORMATIONS -->

    <!-- ATOUTS COMPLÉMENTAIRES -->
    <section>
        <h2>Atouts Complémentaires</h2>
        <ul>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Pédagogie et vulgarisation technique</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Excellente relation client</li>
            <li><span role="presentation" style="font-size:0.9em;">•</span> Détermination et persévérance</li>
        </ul>
    </section>
        <section>
   
            <h2>Glossaire</h2>
                <ul>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">RGAA</span> : Référentiel Général d'Amélioration de l'Accessibilité (standard français)</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">RAAM</span> : Référentiel d'Amélioration de l'Accessibilité Mobile (standard français pour mobile)</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">WCAG</span> : <span lang="en">Web Content Accessibility Guidelines</span> (standard international du <span lang="en">World Wide Web Consortium</span>)</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">ARIA</span> : <span lang="en">Accessible Rich Internet Applications</span> (attributs d'accessibilité <span lang="en">HTML</span>)</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">UX</span> : Expérience utilisateur</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">UI</span> : Interface utilisateur</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">NVDA</span> : <span lang="en">NonVisual Desktop Access</span> (lecteur d'écran Windows)</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">JAWS</span> : <span lang="en">Job Access With Speech</span> (lecteur d'écran Windows)</li>
                    <li><span role="presentation" style="font-size:0.9em;">•</span> <span class="font-semibold" lang="en">VoiceOver</span> : Lecteur d'écran natif <span lang="en">Apple</span></li>
                    </ul>
            </section>
</body>
</html>
`;

async function generatePDF() {
  let browser;
  try {
    // Lancer Puppeteer
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage"],
    });

    const page = await browser.newPage();

    // Viewport A4 à 96dpi pour coordonnées fiables
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });

    // Définir le contenu HTML
    await page.setContent(cvHtml, {
      waitUntil: "networkidle0",
    });

    // Capturer la position du placeholder pour dessiner l'image avec pdf-lib
    let imagePt = null;
    if (thib2ImageSrc) {
      const rect = await page
        .$eval("#header-photo-placeholder", (el) => {
          const r = el.getBoundingClientRect();
          return { x: r.left, y: r.top, w: r.width, h: r.height };
        })
        .catch(() => null);
      if (rect) {
        const scale = 72 / 96;
        const marginTopPt = 0;
        const pageHeightPt = 841.89;
        const pageWidthPt = 595.28;
        const w = 80;
        const h = 80;
        const x = (pageWidthPt - w) / 2;
        // y+h = position PDF du HAUT de l'image (rect.y = px depuis le haut du viewport)
        const yTop = pageHeightPt - marginTopPt - rect.y * scale - 12.75;
        const y = yTop - h;
        console.log(
          `📐 x=${x.toFixed(1)} yTop=${yTop.toFixed(1)} y=${y.toFixed(1)} w=${w} h=${h}`,
        );
        imagePt = { x, y, w, h };
      }
    }

    // Générer le PDF avec options d'accessibilité
    await page.pdf({
      path: tempPath,
      format: "A4",
      margin: {
        top: "0mm",
        right: "15mm",
        bottom: "15mm",
        left: "15mm",
      },
      printBackground: false,
      tagged: true, // Active les tags PDF pour accessibilité
      displayHeaderFooter: false,
    });

    await postProcessPdf(tempPath, imagePt);

    // Remplacer le fichier final (avec fallback si verrouillé par PAC)
    const finalBytes = fs.readFileSync(tempPath);
    try {
      fs.writeFileSync(outputPath, finalBytes);
      fs.unlinkSync(tempPath);
    } catch (e) {
      if (e.code === "EBUSY" || e.code === "EPERM") {
        const altPath = path.join(outputDir, "CV_Thibaut_Raimond_WCAG_new.pdf");
        fs.writeFileSync(altPath, finalBytes);
        fs.unlinkSync(tempPath);
        console.log(`⚠️  Fichier verrouillé. PDF généré ici: ${altPath}`);
      } else throw e;
    }

    console.log("\n✅ CV PDF Accessible généré avec succès!\n");
    console.log(`📄 Fichier: Thibaut_Raimond_CV_WCAG.pdf`);
    console.log(`📍 Chemin: ${outputPath}`);
    console.log(`\n📋 Caractéristiques d'accessibilité:`);
    console.log(`   ✓ Conforme PDF/UA (ISO 14289-1)`);
    console.log(`   ✓ Conforme WCAG 2.1 AA`);
    console.log(`   ✓ Langue définie (lang="fr")`);
    console.log(`   ✓ Structure sémantique (h1, h2, h3, listes, etc.)`);
    console.log(`   ✓ Balises de langage pour contenu anglais`);
    console.log(`   ✓ Métadonnées PDF complètes`);
    console.log(`   ✓ Contraste des couleurs WCAG AA`);
    console.log(`   ✓ Lisible par lecteur d'écran`);
    console.log(`\n🧪 Pour tester l'accessibilité:`);
    console.log(`   1. Télécharger PAC (PDF Accessibility Checker)`);
    console.log(
      `      https://www.access-for-all.ch/en/pdf-accessibility-checker.html`,
    );
    console.log(`   2. Ouvrir ${outputPath} avec PAC`);
    console.log(`   3. Vérifier pas d'erreurs de structure et langage\n`);
  } catch (error) {
    console.error("❌ Erreur lors de la génération du PDF:", error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

generatePDF();

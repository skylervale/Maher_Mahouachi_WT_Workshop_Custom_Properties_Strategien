/**
 * Every entry must include a title and filename, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     filename: string // the name of your HTML file
 *     description?: string // description that will be listed with your entry
 *     duration?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your profile
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 *     sponsored?: boolean // don't worry about adding this, this is done by the owner of the project, your submission will be rejected if set to true without permission.
 * }
 */

const entries = [
	{
		title: "Beschreibung",
		description: "Die Materialien zum Workshop 'Custom Properties Strategien' für den Kurs Webtechnologien im Master Medieninformatik an der TH Köln sind in diesem Repository abgelegt.",
	},
	{
		title: "Vorraussetzungen",
		description: "<ul>"+
						"<li>IDE: "+
							"<a href='https://www.sublimetext.com/3' target='_blank'>Sublime Text 3</a>"+
						"</li>"+
						"<li>Browser: "+
							"<a href='https://www.google.com/chrome/' target='_blank'>Google Chrome</a>,"+
							"<a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank'>Mozilla firefox</a>"+
						"</li>"+
					 "</ul>",
	},
	{
		title: "Material",
		description: "<ul>"+
						"<li>CSS: "+
							"<a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>CSS Dokumentation</a>"+
						"</li>"+
						"<li>Browser: "+
							"<a href='' target='_blank'>Übungen (Github Repo)</a>"+
						"</li>"+
					 "</ul>",
	},
    {
        title: "Aufgabe 1",
        duration:"20 min",
        description: "<p>In der ersten Übung werden wir lernen, wie man traditionelles CSS in CSS Custom Properties mit scoped variable konvertiert.</p>"+
                     "<p>Der CSS-Code in dieser Übung enthält eine Menge Code für etwas nicht Komplexes. In dieser Übung ist der einzige Unterschied zwischen den drei Buttons (primär, sekundär und tertiär) der 'Farbton'.</p>"+
                     "<p>PS: Überarbeiten Sie den Code, indem Sie var(--hue) für die Hintergrund- und Umrissfarbe der Schaltflächen im normalen, Hover- und aktiven Zustand verwenden.</p>",
        exercice:"skylervale/Maher_Mahouachi_WT_Workshop_Custom_Properties_Strategien/tree/main/aufgaben/aufgabe_1.html",
        solution:"skylervale/Maher_Mahouachi_WT_Workshop_Custom_Properties_Strategien/blob/main/lösungen/losung_aufgabe_1.html",
    },
    {
        title: "Aufgabe 2",
        duration:"25 min",
        description: "To do",
        exercice:"skylervale/Maher_Mahouachi_WT_Workshop_Custom_Properties_Strategien/tree/main/aufgaben/aufgabe_2.html",
        solution:"skylervale/Maher_Mahouachi_WT_Workshop_Custom_Properties_Strategien/blob/main/lösungen/losung_aufgabe_2.html",
    },
    {
        title: "Aufgabe 3",
        duration:"25 min",
        description: "To do",
        exercice:"skylervale/Maher_Mahouachi_WT_Workshop_Custom_Properties_Strategien/tree/main/aufgaben/aufgabe_3.html",
        solution:"skylervale/Maher_Mahouachi_WT_Workshop_Custom_Properties_Strategien/blob/main/lösungen/losung_aufgabe_3.html",
    },
];

// create initial list
searchOnInput();

function searchOnInput() {
    //get elements
    const filter = document.getElementById("search").value.toLowerCase();
    const list = document.getElementById("list");

    // remove children
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // filter list
    const filteredEntries = entries.filter((entry) => {
        let key;
        for (key in entry) {
            if (entry.hasOwnProperty(key)) {
                const prop = entry[key];
                if (typeof prop === "string" && prop.toLowerCase().includes(filter)) {
                    return true;
                }
            }
        }
        return false;
    });

    // create list
    filteredEntries.forEach(({ title, description, duration, filename, exercice, solution, compatibleBrowsers }) => {
        // horizontal rule
        const hr = document.createElement("hr");
        list.appendChild(hr);

        const card = document.createElement("div");
        card.className = "card";

        const body = document.createElement("div");
        body.className = "card-body";
        card.appendChild(body);

        // title
        const cardTitle = document.createElement("h5");
        const cardTitleNode = document.createTextNode(title);
        cardTitle.className = "card-title";
        cardTitle.appendChild(cardTitleNode);
        body.appendChild(cardTitle);

        // duration
        if (duration) {
            const durationSubtitle = document.createElement("h6");
            const durationSubtitleNode = document.createTextNode("Dauer: " + duration);
            durationSubtitle.className = "card-subtitle mb-2 text-muted";
            durationSubtitle.appendChild(durationSubtitleNode);
            body.appendChild(durationSubtitle);
        }

        // description
        if (description) {
            const cardDescription = document.createElement("p");
            //const cardDescriptionNode = document.createTextNode(description);
            cardDescription.className = "card-text";
            cardDescription.innerHTML += description;
            body.appendChild(cardDescription);
        }

        // browser list
        if (compatibleBrowsers) {
            const browserList = document.createElement("p");
            const browser = compatibleBrowsers.join(", ");
            const browserNameNode = document.createTextNode(browser);
            browserList.className = "card-text";
            browserList.appendChild(browserNameNode);
            body.appendChild(browserList);
        }

        // toolbar
        const toolbar = document.createElement("div");
        const group1 = document.createElement("div");
        const group2 = document.createElement("div");
        toolbar.className = "btn-toolbar";
        group1.className = "btn-group mr-2";
        group2.className = "btn-group mr-2";
        toolbar.appendChild(group1);
        toolbar.appendChild(group2);
        body.appendChild(toolbar);

        if(filename){
            // HTML Link
            const linkButton = document.createElement("a");
            const linkButtonNode = document.createTextNode(filename);
            linkButton.className = "btn btn-primary btn-md";
            linkButton.href = `./entries/${filename}`;
            linkButton.appendChild(linkButtonNode);
            group1.appendChild(linkButton);
        }

        // exercice github button
        if (exercice) {
            const exerciceGithubButton = document.createElement("a");
            const exerciceGithubButtonNode = document.createTextNode("Aufgabe (Github)");
            exerciceGithubButton.className = "btn btn-primary btn-md";
            exerciceGithubButton.target = "_blank";
            exerciceGithubButton.href = `https://github.com/${exercice}`;
            exerciceGithubButton.appendChild(exerciceGithubButtonNode);
            group2.appendChild(exerciceGithubButton);
        }

        // solution github button
        if (solution) {
            const solutionGithubButton = document.createElement("a");
            const solutionGithubButtonNode = document.createTextNode("Lösung (Github)");
            solutionGithubButton.className = "btn btn-secondary btn-md";
            solutionGithubButton.target = "_blank";
            solutionGithubButton.href = `https://github.com/${solution}`;
            solutionGithubButton.appendChild(solutionGithubButtonNode);
            group2.appendChild(solutionGithubButton);
        }



        list.appendChild(card);
    });
}

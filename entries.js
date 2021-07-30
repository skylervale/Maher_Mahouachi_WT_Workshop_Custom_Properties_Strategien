/**
 * Every entry must include a title and filename, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     filename: string // the name of your HTML file
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
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
];

// sort based on title
//const sortedEntries = entries.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));

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
            console.log(key)
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
    filteredEntries.forEach(({ title, description, filename, github, compatibleBrowsers }) => {
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

        // github button
        if (github) {
            const githubButton = document.createElement("a");
            const githubButtonNode = document.createTextNode("Github");
            githubButton.className = "btn btn-primary btn-md";
            githubButton.href = `https://github.com/${github}`;
            githubButton.appendChild(githubButtonNode);
            group2.appendChild(githubButton);
        }
        list.appendChild(card);
    });
}

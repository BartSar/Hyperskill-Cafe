document.getElementById("reviewForm").addEventListener("submit",function(event){

    event.preventDefault();

    var colDiv = document.createElement("div");
    colDiv.setAttribute("class", "col col-lg-4 col-md-6 py-3");

    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card h-100");

    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");

    var cardTitleH4 = document.createElement("h4");
    cardTitleH4.setAttribute("class", "card-title");
    cardTitleH4.appendChild(document.createTextNode(document.getElementById("reviewTitle").value));

    var blockquote = document.createElement("blockquote");
    blockquote.setAttribute("class", "blockquote mb-0");

    var p = document.createElement("p");
    p.appendChild(document.createTextNode(document.getElementById("reviewText").value));

    var footer = document.createElement("footer");
    footer.setAttribute("class", "blockquote-footer text-end");

    var i = document.createElement("i");
    i.appendChild(document.createTextNode(document.getElementById("reviewName").value == "" ? "Anonymous" : document.getElementById("reviewName").value));

    footer.appendChild(i);
    blockquote.appendChild(p);
    blockquote.appendChild(footer);
    cardBodyDiv.appendChild(cardTitleH4);
    cardBodyDiv.appendChild(blockquote);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    document.getElementById("reviewsRow").appendChild(colDiv);
})

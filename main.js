document.getElementById('upper-case').onclick = function() {
        let text = document.getElementById('textarea').value.toUpperCase();
        document.getElementById('textarea').value = text;
    }

    document.getElementById('lower-case').onclick = function() {
        let text = document.getElementById('textarea').value.toLowerCase();
        document.getElementById('textarea').value = text;
    }


    document.getElementById('proper-case').onclick = () => {
        let text = document.getElementById('textarea').value
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        document.getElementById('textarea').value = text;
    };

    document.getElementById("sentence-case").addEventListener("click", function() {
        let elem = document.getElementById("textarea");
        let text = elem.value;
        let sentences = text.split(".");
        sentences = sentences.map( (sentence) => {
            sentence = sentence.trimLeft();
            return sentence.substr(0,1).toUpperCase() + sentence.substr(1).toLowerCase();
        }).join(". ");
        elem.value = sentences.trim();

    });

    document.getElementById("save-text-file").onclick = function() {
        let textarea = document.getElementById("textarea").value;
        let downloadableLink = document.createElement('a');
        downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea));
        downloadableLink.download = "text" + ".txt";
        document.body.appendChild(downloadableLink);
        downloadableLink.click();
        document.body.removeChild(downloadableLink);
    }

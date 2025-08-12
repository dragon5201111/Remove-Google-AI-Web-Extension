const patterns = [
    /ai overview/i
]

const aiMode = document.querySelector("div.olrp5b")
if (aiMode){
    hideElement(aiMode)
}

const aiOverviewHeader = document.getElementById("Odp5De")
if (aiOverviewHeader){
    if (innerHTMLMatchesPattern(aiOverviewHeader.innerHTML)){
        hideElement(aiOverviewHeader)
    }
}

const documentObserver = new MutationObserver(()=>{
    const relatedQuestionPairs = document.querySelectorAll("div.related-question-pair")
    relatedQuestionPairs.forEach((questionPair)=>{
        if (hasBeenVisited(questionPair)){
            return
        }

        if (innerHTMLMatchesPattern(questionPair.innerHTML)){
            hideElement(questionPair)
        }
        
        markAsVisited(questionPair)
    })
})

function hasBeenVisited(element){
    return element.hasAttribute("visited")
}

function innerHTMLMatchesPattern(innerHTML){
    return patterns.some(pattern => pattern.test(innerHTML))
}

function hideElement(element){
    element.style.display = "none"
}

function markAsVisited(element){
    element.setAttribute("visited", "")
}

const observerConfig = {
    childList : true,
    subtree : true
}

documentObserver.observe(document, observerConfig)

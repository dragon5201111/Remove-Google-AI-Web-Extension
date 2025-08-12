const patterns = [
    /ai overview/i
]

const aiModeDiv = document.querySelector("div.olrp5b")
if (aiModeDiv){
    hideElement(aiModeDiv)
}

// Header is only loaded on the first search page; don't need to respond to dom changes
const headerAiOverviewDiv = document.getElementById("Odp5De")
if (headerAiOverviewDiv){
    if (innerHTMLMatchesPattern(headerAiOverviewDiv.innerHTML)){
        hideElement(headerAiOverviewDiv)
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

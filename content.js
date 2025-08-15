const patterns = [
    /ai overview/i
]

const aiModeTab = document.querySelector("div.olrp5b")
ElementHider.hide(aiModeTab, patterns)

const aiOverviewHeader = document.getElementById("Odp5De")
ElementHider.hide(aiOverviewHeader, patterns)

const documentObserver = new MutationObserver(()=>{
    const aiOverviewElements = document.querySelectorAll("[data-mcpr]")
    const relatedQuestionPairs = document.querySelectorAll("div.related-question-pair")
    ElementHider.hideAll([...aiOverviewElements, ...relatedQuestionPairs], patterns)
})

const documentObserverConfig = {
    childList : true,
    subtree : true
}

documentObserver.observe(document, documentObserverConfig)
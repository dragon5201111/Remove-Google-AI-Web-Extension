const patterns = [
    /ai overview/i
]

const aiModeTab = document.querySelector("div.olrp5b")
ElementHider.hide(aiModeTab, patterns)

const aiOverviewHeader = document.getElementById("Odp5De")
ElementHider.hide(aiOverviewHeader, patterns)

const documentObserver = new MutationObserver(()=>{
    const aiOverviewElements = document.querySelectorAll("[data-mcpr]")
    aiOverviewElements.forEach((element)=>{
        ElementHider.hide(element, patterns)
    })

    const relatedQuestionPairs = document.querySelectorAll("div.related-question-pair")
    relatedQuestionPairs.forEach((questionPair)=>{
        ElementHider.hide(questionPair, patterns)
    })
})


const observerConfig = {
    childList : true,
    subtree : true
}

documentObserver.observe(document, observerConfig)
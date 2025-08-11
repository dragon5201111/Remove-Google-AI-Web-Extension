const headerAiOverviewDiv = 
    document.querySelector("div.bzXtMb.M8OgIe.dRpWwb") ? document.getElementById("Odp5De") : null
removeNodeIfExists(headerAiOverviewDiv)

const aiOverviewBelowQueries = document.querySelector("div.YzCcne")
removeNodeIfExists(aiOverviewBelowQueries)

const aiModeDiv = document.querySelector("div.olrp5b")
removeNodeIfExists(aiModeDiv)

const aiModeButton = document.querySelector("button.plR5qb")
removeNodeIfExists(aiModeButton)

const peopleAlsoAskDiv = document.querySelector("div.Wt5Tfe")
const questionPairDiv = peopleAlsoAskDiv.getElementsByClassName("LQCGqc")[0]
questionPairDiv.addEventListener("click", ()=>{
    deleteAiQuestionPairs(questionPairDiv)
    markChildrenAsVisited(questionPairDiv)
})

function markChildrenAsVisited(div){
    let children = div.children
    for (let i = 0; i < children.length; i++){
        children[i].setAttribute("visited", "")
    }
}

function deleteAiQuestionPairs(div){
    let childrenToDelete = getQuestionPairsToDelete(div)

    childrenToDelete.forEach((element)=>{
        element.remove()
    })
}

function getQuestionPairsToDelete(div){
    let children = div.children
    let childrenToDelete = []


    for (let i = 0; i < children.length; i++){
        let child = children[i]
        if (childHasBeenVisited(child)){
            continue
        }

        if (aiOverviewPairFound(child)){
            childrenToDelete.push(child)
        }
    }

    return childrenToDelete
}

function childHasBeenVisited(child){
    return child.hasAttribute("visited")
}

function aiOverviewPairFound(div){
    stack = []
    stack.push(div)

    while (stack.length){
        element = stack.pop()

        if (element.tagName == "STRONG" && element.textContent == "AI Overview"){
            return true
        }

        let children = element.children
        for (let i = 0; i < children.length; i++){
            stack.push(children[i])
        }
    }

    return false
}

function removeNodeIfExists(node){
    if (node){
        node.remove()
    }
}
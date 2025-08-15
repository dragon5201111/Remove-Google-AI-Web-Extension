class ElementHider{
    static HIDE_ATTRIBUTE = "hidden"

    static hideAll(elements, regexPatterns){
        elements.forEach((element) => {
            ElementHider.hide(element, regexPatterns)
        });
    }

    static hide(element, regexPatterns){
        if (!element){
            return
        }

        if (ElementHider.#hasBeenHidden(element)) {
            return;
        }

        if (ElementHider.#innerHTMLMatchesAPattern(element, regexPatterns)) {
            ElementHider.#makeElementInvisible(element);
            ElementHider.#markElementAsHidden(element);
        }
    }

    static #hasBeenHidden(element) {
        return element.hasAttribute(ElementHider.HIDE_ATTRIBUTE);
    }

    static #innerHTMLMatchesAPattern(element, regexPatterns) {
        return regexPatterns.some(pattern => pattern.test(element.innerHTML));
    }

    static #makeElementInvisible(element) {
        element.style.display = "none";
    }

    static #markElementAsHidden(element) {
        element.setAttribute(ElementHider.HIDE_ATTRIBUTE, "");
    }
}
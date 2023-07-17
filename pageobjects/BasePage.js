class BasePage {
    constructor(page){
        this.page=page

    }


    // BONUS
    async traverseDOM(element, callback) {
      
        callback(element);
    
      
        let children = element.childNodes;
    
        for(let i = 0; i < children.length; i++) {
            let child = children[i];
    
           
            if(child.nodeType === 1) {
                traverseDOM(child, callback);
            }
        }
    
    }
    
    

}



module.exports = {BasePage};
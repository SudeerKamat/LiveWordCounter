import { LightningElement } from 'lwc';

export default class Word_Character_Counter extends LightningElement {
    handleOnChange(){
    let inputField = this.refs.inputField;
    let char = this.refs.charCount;
    let word = this.refs.wordCount;
    let space = this.refs.spaceCount;    
    // count characters 
    let content = inputField.value;
    char.textContent = ' ' + content.length;
    // count spaces
    space.textContent =  ' ' + content.split(' ').length - 1;
    // remove empty spaces from start and end 
    content.trim();
    // Remove spaces from between words 
    let wordList = content.split(/\s/);
    let words = wordList.filter(function (element) {
        return element != "";
    });
    // count words 
    word.textContent = words.length;
    }
}
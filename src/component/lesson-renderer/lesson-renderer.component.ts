import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-lesson-renderer',
  templateUrl: './lesson-renderer.component.html',
  styleUrls: ['./lesson-renderer.component.scss'],
})
export class LessonRendererComponent  implements OnChanges {


  @Input() text: string = '';
  @Input() imageUrls: string[] = [];
  @Input() topic: string = '';
  @Input() topicDesc: string = '';
  formattedContent: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {

    this.formatContent();
  }



  private formatContent(): void {
    const combinedRegex = /<Keypoint>(.*?)<\/Keypoint>|<Image(\d+)>|<Example>(.*?)<\/Example>|<Output>(.*?)<\/Output>|<Note>(.*?)<\/Note>|<ConceptTitle>(.*?)<\/ConceptTitle>/g;
    let lastIndex = 0;
    let match;
    this.formattedContent = [];
  
    while ((match = combinedRegex.exec(this.text)) !== null) {
      if (match.index > lastIndex) {
        this.formattedContent.push(this.text.substring(lastIndex, match.index).trim());
      }
  
      if (match[1]) {
        // Match for <Keypoint>
        this.formattedContent.push(match[1].trim());
      } else if (match[2]) {
        // Match for <Image>
        const imageIndex = parseInt(match[2], 10) - 1;
        if (this.imageUrls[imageIndex]) {
          this.formattedContent.push(`<img src="${this.imageUrls[imageIndex]}" />`);
        }
      } else if (match[3]) {
        // Match for <Example>
        const imageTag = this.extractImageTag(match[3]);
        if (imageTag) {
          this.formattedContent.push(`<div class="example-label"><div class="headerDiv"><span>Example</span></div>${imageTag}</div>`);
        }
      } else if (match[4]) {
        // Match for <Output>
        const imageTag = this.extractImageTag(match[4]);
        if (imageTag) {
          this.formattedContent.push(`<div class="output-label"><div class="headerDiv"><span>Output</span></div>${imageTag}</div>`);
        }
      } else if (match[5]) {
        // Match for <Note>
        this.formattedContent.push(`<div class="note-label"><span>Note: </span>${match[5].trim()}</div>`);
      } else if (match[6]) {
        // Match for <ConceptTitle>
        this.formattedContent.push(`<h2 class="concept-title">${match[6].trim()}</h2>`);
      }
  
      lastIndex = combinedRegex.lastIndex;
    }
  
    if (lastIndex < this.text.length) {
      this.formattedContent.push(this.text.substring(lastIndex).trim());
    }
  }

  private extractImageTag(content: string): string | null {
    const imageRegex = /<Image(\d+)>/;
    const match = imageRegex.exec(content);
    if (match) {
      const imageIndex = parseInt(match[1], 10) - 1;
      if (this.imageUrls[imageIndex]) {
        return `<img src="${this.imageUrls[imageIndex]}" />`;
      }
    }
    return null;
  }

  /*
  private formatContent(): void{
    const combinedRegex = /<Keypoint>(.*?)<\/Keypoint>|<Image(\d+)>/g;
    let lastIndex = 0;
    let match;
    this.formattedContent = [];

    while ((match = combinedRegex.exec(this.text)) !== null) {
      if (match.index > lastIndex) {
        this.formattedContent.push(this.text.substring(lastIndex, match.index).trim());
      }

      if (match[1]) {
        // If it's a Keypoint tag
        this.formattedContent.push(match[1].trim());
      } else if (match[2]) {
        // If it's an Image tag
        const imageIndex = parseInt(match[2], 10) - 1;
        if (this.imageUrls[imageIndex]) {
          this.formattedContent.push(`<img src="${this.imageUrls[imageIndex]}" />`);
        }
      }

      lastIndex = combinedRegex.lastIndex;
    }

    if (lastIndex < this.text.length) {
      this.formattedContent.push(this.text.substring(lastIndex).trim());
    }
  }


  /*
  isImage(part: string):boolean{
    return /\[image\d+\]/.test(part);
  }

  getImageUrl(part: string): string | null{
    const imageMatch = part.match(/\[image(\d+)\]/);

    if(imageMatch){
      const imageIndex = parseInt(imageMatch[1],10) - 1;
      return !isNaN(imageIndex) && this.imageUrls[imageIndex] ? this.imageUrls[imageIndex] : null;
    }
    return null;
  }

  */




  constructor() { }

  ngOnInit() {}

}

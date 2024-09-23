import { Component, OnInit,Input,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-render-blog',
  templateUrl: './render-blog.component.html',
  styleUrls: ['./render-blog.component.scss'],
})
export class RenderBlogComponent  implements OnInit {

  @Input() text: string = '';
  @Input() imageUrls: string[] = [];
  //@Input() topic: string = '';
  //@Input() topicDesc: string = '';
  formattedContent: string[] = [];

  ngOnChanges(changes: SimpleChange): void {
    this.formatContent();
  }


  /*
  private formatContent(): void {
    const combinedRegex = /<mainT>(.*?)<\/mainT>|<Pg>(.*?)<\/Pg>|<St>(.*?)<\/St>|<Imag(\d+)>/g;
    let lastIndex = 0;
    let match;
    this.formattedContent = [];

    while ((match = combinedRegex.exec(this.text)) !== null) {
      if (match.index > lastIndex) {
        this.formattedContent.push(this.text.substring(lastIndex, match.index).trim());
      }

      if (match[1]) {
        // Match for <mainT> (H1)
        this.formattedContent.push(`<h1 class="mainTitle">${match[1].trim()}</h1>`);
      } else if (match[2]) {
        // Match for <Pg> (Paragraph)
        this.formattedContent.push(`<p class="paragContent">${match[2].trim()}</p>`);
      } else if (match[3]) {
        // Match for <St> (H2)
        this.formattedContent.push(`<h2 class="subTitle">${match[3].trim()}</h2>`);
      } else if (match[4]) {
        // Match for <Imag> (Image)
        const imageIndex = parseInt(match[4], 10) - 1;
        if (this.imageUrls[imageIndex]) {
          this.formattedContent.push(`<img src="${this.imageUrls[imageIndex]}" alt="Image ${imageIndex + 1}" />`);
        }
      }

      lastIndex = combinedRegex.lastIndex;
    }

    if (lastIndex < this.text.length) {
      this.formattedContent.push(this.text.substring(lastIndex).trim());
    }
  }
  */


  private formatContent(): void {
    // Adjusted regex to match <image1>, <image2>, etc.
    const combinedRegex = /<mainT>(.*?)<\/mainT>|<Pg>(.*?)<\/Pg>|<St>(.*?)<\/St>|<image(\d+)>/g;
    let lastIndex = 0;
    let match;
    this.formattedContent = [];
  
    while ((match = combinedRegex.exec(this.text)) !== null) {
      if (match.index > lastIndex) {
        // Push text before the current match
        this.formattedContent.push(this.text.substring(lastIndex, match.index).trim());
      }
  
      if (match[1]) {
        // Match for <mainT> (H1)
        this.formattedContent.push(`<h1 class="mainTitle">${match[1].trim()}</h1>`);
      } else if (match[2]) {
        // Match for <Pg> (Paragraph)
        this.formattedContent.push(`<p class="paragContent">${match[2].trim()}</p>`);
      } else if (match[3]) {
        // Match for <St> (H2)
        this.formattedContent.push(`<h2 class="subTitle">${match[3].trim()}</h2>`);
      } else if (match[4]) {
        // Match for <imageX> where X is the image number (1-based index)
        const imageIndex = parseInt(match[4], 10) - 1; // Convert to 0-based index
        if (this.imageUrls[imageIndex]) {
          // Push the img tag with the corresponding URL
          this.formattedContent.push(`<img  class="image" src="${this.imageUrls[imageIndex]}" alt="Image ${imageIndex + 1}" />`);
        } else {
          console.warn(`Image not found for index ${imageIndex + 1}`);
        }
      }
  
      lastIndex = combinedRegex.lastIndex; // Update the lastIndex to the end of the current match
    }
  
    if (lastIndex < this.text.length) {
      // Push remaining text after the last match
      this.formattedContent.push(this.text.substring(lastIndex).trim());
    }
  }



/*

private formatContent(): void {
  // Adjusted regex to match <mainT>, <Pg>, <St>, <ul>, <li>, and <image1>, <image2>, etc.
  const combinedRegex = /<mainT>(.*?)<\/mainT>|<Pg>(.*?)<\/Pg>|<St>(.*?)<\/St>|<ul>|<\/ul>|<li>(.*?)<\/li>|<image(\d+)>/g;
  let lastIndex = 0;
  let match;
  this.formattedContent = [];

  let currentList = null; // To track the current list
  let currentListItems = []; // To store items for the current list

  while ((match = combinedRegex.exec(this.text)) !== null) {
    if (match.index > lastIndex) {
      // Push text before the current match
      this.formattedContent.push(this.text.substring(lastIndex, match.index).trim());
    }

    if (match[1]) {
      // Match for <mainT> (H1)
      this.formattedContent.push(`<h1 class="mainTitle">${match[1].trim()}</h1>`);
    } else if (match[2]) {
      // Match for <Pg> (Paragraph)
      this.formattedContent.push(`<p class="paragContent">${match[2].trim()}</p>`);
    } else if (match[3]) {
      // Match for <St> (H2)
      this.formattedContent.push(`<h2 class="subTitle">${match[3].trim()}</h2>`);
    } else if (match[4]) {
      // Match for <ul>
      if (currentList) {
        // Close the previous list if it exists
        this.formattedContent.push(currentList + `</ul>`);
      }
      currentList = `<ul>`; // Start a new list
    } else if (match[5]) {
      // Match for <li>
      if (currentList) {
        currentListItems.push(`<li>${match[5].trim()}</li>`); // Store the <li> item
      }
    } else if (match[6]) {
      // Match for <imageX> where X is the image number (1-based index)
      const imageIndex = parseInt(match[6], 10) - 1; // Convert to 0-based index
      if (this.imageUrls[imageIndex]) {
        // Push the img tag with the corresponding URL
        this.formattedContent.push(`<img class="image" src="${this.imageUrls[imageIndex]}" alt="Image ${imageIndex + 1}" />`);
      } else {
        console.warn(`Image not found for index ${imageIndex + 1}`);
      }
    }

    lastIndex = combinedRegex.lastIndex; // Update the lastIndex to the end of the current match
  }

  // Close any remaining list items and the list itself
  if (currentList) {
    if (currentListItems.length > 0) {
      this.formattedContent.push(currentList + currentListItems.join('') + `</ul>`);
    } else {
      this.formattedContent.push(currentList + `</ul>`); // Just close the list if no items
    }
  }

  if (lastIndex < this.text.length) {
    // Push remaining text after the last match
    this.formattedContent.push(this.text.substring(lastIndex).trim());
  }
}
*/

  constructor() { }

  ngOnInit() {}

}

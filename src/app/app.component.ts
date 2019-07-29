import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'funBox';
	public activeItem = [];
	private cats = [
	    {id: 1, title:'Сказочное заморское яство', subtitle:"Чего сидишь? Порадуй котэ", name:'фуагра', count:'10', gift:' мышь в подарок', weight:'0,5', availability:'5'},
	    {id: 2, title:'Сказочное заморское яство', subtitle:"Головы щучьи с чесноком, да свежайшая семгушка", name:'рыбой', count:'40', gift:'2 мыши в подарок', weight:'2', availability:'5'},
	    {id: 3, title:'Сказочное заморское яство', subtitle:"Печалькка, с курой закончилось", name:'курой', count:'100', gift:'5 мышей в подарок', weight:'5', availability:''}
	];
	
    public getClick(item): void {
    	if(item.availability){
		    if(this.activeItem[this.activeItem.indexOf(item.id)]){
				this.activeItem.splice(this.activeItem.indexOf(item.id), 1);
		    } else{
		    	this.activeItem.push(item.id);
		    }
		}
    }
}
 
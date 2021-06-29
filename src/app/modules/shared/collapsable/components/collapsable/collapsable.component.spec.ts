import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsableComponent } from './collapsable.component';

describe('CollapsableComponent', () => {
	let component: CollapsableComponent;
	let fixture: ComponentFixture<CollapsableComponent>;
	let nativeElement: any;
	
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CollapsableComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CollapsableComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render not collapsed and collapse on click', () => {
		expect(nativeElement.querySelector('.collapsable__content--collapsed')).toBeFalsy();
		nativeElement.querySelector('.collapsable__title').click();
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
		expect(nativeElement.querySelector('.collapsable__content--collapsed')).toBeTruthy();
	});

	it('should render collapsed', () => {
		fixture = TestBed.createComponent(CollapsableComponent);
		component = fixture.componentInstance;
		component.collapsed = true;	
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
		expect(nativeElement.querySelector('.collapsable__content--collapsed')).toBeTruthy();
	});

});

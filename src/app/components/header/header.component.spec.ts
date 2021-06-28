import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let nativeElement: any;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render page title', () => {
		expect(nativeElement.querySelector('.header__content__logo__title').textContent).toContain('World Kart Championship!');
	});
});

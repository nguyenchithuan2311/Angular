import {
    Component,
    Input,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    SimpleChanges,
    DestroyRef,
    inject,
    ElementRef,
    afterNextRender,
    afterRender,
    ChangeDetectionStrategy
  } from '@angular/core';
  
  @Component({
    selector: 'app-lifecycle',
    template: `
      <div class="lifecycle-box">
        <p>👤 LifecycleComponent - name: {{ name }}</p>
      </div>
    `,
    styles: [`
      .lifecycle-box {
        padding: 16px;
        background: #eef;
        border-radius: 8px;
        border: 2px dashed #77f;
        margin-top: 8px;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class LifecycleComponent implements
    OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
  
    @Input() name: string = '';
  
    private destroyRef = inject(DestroyRef);
    private elRef = inject(ElementRef);
    private intervalId?: any;
  
    constructor() {
      console.log('1️⃣ [constructor]');
  
      // DestroyRef cleanup
      this.destroyRef.onDestroy(() => {
        console.log('🔚 [DestroyRef] Cleanup interval');
        clearInterval(this.intervalId);
      });
  
      // DOM render hooks
      afterNextRender({
        write: () => {
          console.log('🔟 [afterNextRender] write phase');
          this.elRef.nativeElement.style.boxShadow = '0 0 10px green';
          return true;
        },
        read: (didWrite) => {
          if (didWrite) {
            const height = this.elRef.nativeElement.getBoundingClientRect().height;
            console.log('1️⃣1️⃣ [afterNextRender] read phase - height:', height);
          }
        }
      });
  
      afterRender(() => {
        console.log('🔁 [afterRender] DOM fully rendered');
      });
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('2️⃣ [ngOnChanges]', changes);
    }
  
    ngOnInit(): void {
      console.log('3️⃣ [ngOnInit]');
    }
  
    ngDoCheck(): void {
      console.log('4️⃣ [ngDoCheck]');
    }
  
    ngAfterContentInit(): void {
      console.log('5️⃣ [ngAfterContentInit]');
    }
  
    ngAfterContentChecked(): void {
      console.log('6️⃣ [ngAfterContentChecked]');
    }
  
    ngAfterViewInit(): void {
      console.log('7️⃣ [ngAfterViewInit]');
    }
  
    ngAfterViewChecked(): void {
      console.log('8️⃣ [ngAfterViewChecked]');
    }
  
    ngOnDestroy(): void {
      console.log('9️⃣ [ngOnDestroy]');
      clearInterval(this.intervalId);
    }
  }
  
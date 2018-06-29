import {trigger, stagger, animate, style, group, query as q, transition, keyframes, state} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export function pop() {
  return trigger('pop', [
    state('void', style({position: 'fixed'}) ),
    state('*', style({position: 'fixed'}) ),
   
    transition(':leave', [
      query('.logo', stagger(300, [
        style({ transform: 'translateY(0px)', opacity: 1 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
      ])),
              
    ]),
  ]);
}


export function fade() {
  return trigger('fade', [
    state('void', style({position: 'fixed'}) ),
    state('*', style({position: 'fixed'}) ),
   
    transition(':leave', [
      query('.inputUser, .inputPassword, button', stagger(0, [
        style({  opacity: 1 }),
        animate('1s ease', style({opacity: 0})),
      ])),
              
    ]),
  ]);
}


export function opa() {
  return trigger('opa', [
    state('void', style({position: 'fixed'}) ),
    state('*', style({position: 'fixed'}) ),
   
    transition(':enter', [
      query('.profile', style({ opacity: 0 })),
      query('.profile', stagger(300, [
        style({ transform: 'translateY(100px)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-50%)', opacity: 1})),
      ])),
    ]),


    transition(':leave', [
      query('.profile', stagger(0, [
        style({  opacity: 1 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
      ])),
              
    ]),
  ]);
}
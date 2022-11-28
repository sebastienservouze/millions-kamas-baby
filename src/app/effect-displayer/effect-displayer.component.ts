import { Component, Input, OnInit } from '@angular/core';
import { Effect } from '../models/effect.model';

@Component({
  selector: 'app-effect-displayer',
  templateUrl: './effect-displayer.component.html',
  styleUrls: ['./effect-displayer.component.scss']
})
export class EffectDisplayerComponent {

  _effect: Effect | null = null;

  @Input()
  set effect(effect: Effect | null) {
    this._effect = effect;
    this.effectRealName = this.ddbNameToRealName(effect.name);
  }

  get effect(): Effect | null {
    return this._effect;
  }

  effectRealName: string;
  
  constructor() { }

  ddbNameToRealName(ddbName: string): string {
    switch (ddbName) {
      case 'ii':
        return 'Initiative';
      case 'vi':
        return 'Vitalité';
      case 'fo':
        return 'Force';
      case 'in':
        return 'Intelligence';
      case 'sa': 
        return 'Sagesse';
      case 'ag':
        return 'Agilité';
      case 'ch':
        return 'Chance';
      case 'cc':
        return 'Coups critiques';
      case 'so': 
        return 'Soins';
      case 'dmg':
        return 'Dommages';
      case 'po':
        return 'Portée'
      case 'pp':
        return 'Prospection';
      case 'rn':
        return 'Res. Neutre';
      case 'rnp':
        return '% Res. Neutre';
      case 'rt':
        return 'Res. Terre';
      case 'rtp':
        return '% Res. Terre';
      case 'rf':
        return 'Res. Feu';
      case 'rfp': 
        return '% Res. Feu';
      case 're':
        return 'Res. Eau';
      case 'rep':
        return '% Res. Eau'
      case 'ic': 
        return 'Invocations'
      case 'pu':
        return '% Dommages'
      case 'pa':
        return 'PA';
      case 'pm':
        return 'PM';
      case 'rv':
        return 'Renvoi dommages'
      default: 
        return ddbName;
    }
  }

}

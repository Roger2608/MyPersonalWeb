import {Component} from '@angular/core';
import {SocialNetwork} from "../../interfaces/social-network";

@Component({
  selector: 'shared-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent {

  public networks: SocialNetwork[] = [
    {
      name: 'X',
      url: 'https://twitter.com/',
      icon: 'x.svg'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ricm2608/',
      icon: 'instagram.svg'
    },
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/roger-israel-cabrera-muñoz-6238b1202',
      icon: 'linkedIn.svg'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Roger2608',
      icon: 'github.svg'
    }
  ]

}

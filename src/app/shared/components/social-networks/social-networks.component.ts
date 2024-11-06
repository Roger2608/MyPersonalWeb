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
      name: 'Instagram',
      url: 'https://www.instagram.com/ricm2608/',
      icon: 'instagram.svg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ricm2608/',
      icon: 'linkedIn.svg'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Roger2608',
      icon: 'github.svg'
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@ricm2608',
      icon: 'youtube.svg'
    }
  ]

}

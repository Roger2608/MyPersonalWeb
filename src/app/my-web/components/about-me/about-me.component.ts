import {Component} from '@angular/core';

@Component({
  selector: 'my_web-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  public aboutMe = {
    introduction: 'Soy un apasionado desarrollador back-end con amplia experiencia en Java y especializado en la creación de APIs robustas. Me enfoco en escribir código eficiente y de alta calidad para asegurar un rendimiento óptimo. Además, tengo habilidades avanzadas en Azure, donde diseño y gestiono soluciones en la nube escalables. Me adapto fácilmente a nuevas situaciones y siempre doy lo mejor de mí en cada proyecto. Valoro el trabajo en equipo y la innovación, y estoy emocionado por seguir creciendo en un entorno que aprecie la excelencia técnica y la adopción de nuevas tecnologías.',
    interests: 'Me encanta desarrollar APIs eficientes y escalables con Java, y disfruto explorando y utilizando los servicios de Azure para crear soluciones en la nube. Me interesa diseñar arquitecturas robustas y modulares, como microservicios. Siempre busco formas de mejorar el rendimiento y la eficiencia de las aplicaciones back-end. Me mantengo actualizado con tecnologías emergentes como Docker, Kubernetes y CI/CD, y me preocupo por aplicar las mejores prácticas de seguridad en el desarrollo de software.',
    closing: 'Mi experiencia como Back-end Software Engineer me ha enseñado a valorar la importancia de mantener un código claro y eficiente. Adaptarme a nuevas tecnologías y seguir aprendiendo es clave para mi crecimiento. La colaboración es esencial para el éxito de cualquier proyecto, y siempre busco nuevas formas de optimizar y mejorar los sistemas. Además, priorizo la seguridad en todas las etapas del desarrollo. Estoy entusiasmado por seguir creciendo profesionalmente, aplicando mis habilidades en Java y Azure en entornos que valoren la innovación y la excelencia técnica.'
  }
}

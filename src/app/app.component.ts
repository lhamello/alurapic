import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  photos = [
    {
      url: 'https://i.pinimg.com/originals/f4/dd/47/f4dd47457a89648fe74c28dc88cb020f.jpg',
      description: 'Libertadores83'
    },
    {
      url: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/08/gremio-1995-libertadores.jpg',
      description: 'Libertadores95'
    },
    {
      url: 'https://s2.glbimg.com/OudToX_YyHHi7vbiXFcmYr9xuMA=/696x390/smart/filters:cover():strip_icc()/s.glbimg.com/es/ge/f/original/2017/11/30/2017-11-30t001517z_97840856_rc15f35a1970_rtrmadp_3_soccer-libertadores-lan-gre.jpg',
      description: 'Libertadores17'
    }
  ];
}

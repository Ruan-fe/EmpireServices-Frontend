import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PoPieChartSeries } from '@po-ui/ng-components';
import { ServicosService } from '../servicos/servicos.service';
import { first, mergeMap, switchMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private servicosService: ServicosService) { }
  ngAfterViewInit(): void {
  
  }
  statusP: any 
  statusC: any 
  ngOnInit(): void {
    this.recuperaCountStatusP();
    this.recuperaCountStatusC();

  console.log(this.pseries)
  }
  teste(){
    this.recuperaCountStatusP();
    this.recuperaCountStatusC();
  }

  recuperaCountStatusP(){
   this.servicosService.recuperarCountServicosPorStatus("P").subscribe(
     res =>{
      this.statusP = res;
      this.pseries.push(
        {category: 'Serviços Pendentes', value: res}
      )
     }
   )
  }
  recuperaCountStatusC(){
    this.servicosService.recuperarCountServicosPorStatus("C").subscribe(
      res =>{
        this.statusC = res;
        this.pseries.push(
          {category: 'Serviços Concluidos', value: res}
        )

      }
      )
    }
  
  

  pseries: Array<any> = [

  ]

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.css']
})
export class GetTeamsComponent implements OnInit {
teamsdata:any[]=[]
  constructor(private ps:AdminService,private route:Router,private ar:ActivatedRoute) { 
    this.ps.getTeams().subscribe(data=>{
      this.teamsdata.push(...data)
     })
  }

  ngOnInit(): void {
  }

}

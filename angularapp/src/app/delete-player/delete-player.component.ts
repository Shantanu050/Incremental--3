import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
playerdata:Player
id:number
  constructor(private ps:AdminService,private router:Router,private ar:ActivatedRoute) { 
    const pid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(pid)
   this.ps.getPlayerById(this.id).subscribe((data:Player)=>{
    this.playerdata=data
   })
  }
  deleteData(data:Player):void
  {
    this.ps.deletePlayer(this.id).subscribe(()=>
    {
      alert('Player deleted!!')
      this.router.navigate(['/listPlayer'])
    })
  }

  ngOnInit(): void {
  }

}
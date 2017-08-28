import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})

export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['id']);
    });

    this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver => {
      this.memberToDisplay = new Member(  dataLastEmittedFromObserver.name,
      dataLastEmittedFromObserver.gender,
      dataLastEmittedFromObserver.affiliation,
      dataLastEmittedFromObserver.level);
    });
  }

  goToClubroster() {
    this.router.navigate(['roster']);
  };

}

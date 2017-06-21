import {Component, OnDestroy, OnInit} from "@angular/core";
import {FellowItem} from "../fellows/fellow";
import {ActivatedRoute, Router} from "@angular/router";
import {FellowsService} from "../fellows/fellows.service";
import {User} from "app/user";
import {AuthenticationService} from "../authentication.service";
import {PublicationItem} from "../fellows/publication";

@Component({
  selector: 'app-fellow-detail',
  templateUrl: './fellow-detail.component.html',
  styleUrls: ['./fellow-detail.component.css']
})
export class FellowDetailComponent implements OnInit, OnDestroy {
  private req: any;
  private routeSub: any;
  fellow: FellowItem;
  newFellow: FellowItem;
  newPublication: any;
  slug: string;
  user: User;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fellowsService: FellowsService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = this.authenticationService.user;
    this.authenticationService.userUpdate.subscribe(user => {
      this.user = user;
      this.makeEmptyNewPublication();
    });
    this.makeEmptyNewPublication();
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.req = this.fellowsService.get(this.slug).subscribe(data => {
        this.fellow = data as FellowItem;
        this.cloneFellow();
        this.route.data
          .subscribe((data: { editMode }) => {
            this.editMode = data.editMode;
          });
      })
    });
  }

  cloneFellow() {
    this.newFellow = JSON.parse(JSON.stringify(this.fellow))
  }

  makeEmptyNewPublication() {
    if (this.user) {
      this.newPublication = {author: this.user.id}
    }
  }

  goToEditDetail(slug) {
    let link = ['/fellow/edit', slug];
    this.router.navigate(link);
  }

  getFullPost() {
    return [this.fellow.post, this.fellow.post_sci, this.fellow.post_academy].filter(x => x).join(", ");
  }

  save() {
    this.fellowsService.update(this.slug, this.newFellow).subscribe(params => {
      this.fellow = params;
      this.cancel();
    }, error => {

    });

  }

  addPublication() {
    this.fellowsService.addPublication(this.slug, this.newPublication).subscribe((params: any) => {
      if (params) {
        this.fellow.publications.push(params);
        this.makeEmptyNewPublication();
      }
    })
  }

  removePublication(publicationPk) {
    this.fellowsService.removePublication(this.slug, publicationPk).subscribe(() => {
      this.fellow.publications = this.fellow.publications.filter(x => x.pk !== publicationPk);
    })
  }


  cancel() {
    this.cloneFellow();
    let link = ['/fellow/', this.slug];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}

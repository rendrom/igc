import {Component, OnDestroy, OnInit} from '@angular/core';
import {Fellow} from '../../classes/fellow';
import {ActivatedRoute, Router} from '@angular/router';
import {FellowsService} from '../../services/fellows.service';
import {User} from 'app/user';
import {AuthenticationService} from '../../services/authentication.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-fellow-detail',
  templateUrl: './fellow-detail.component.html',
  styleUrls: ['./fellow-detail.component.css']
})
export class FellowDetailComponent implements OnInit, OnDestroy {
  fellow: Fellow;
  newFellow: Fellow;
  newPublication: any;
  slug: string;
  user: User;
  editMode = false;

  private reqList: [Subscription] = [] as [Subscription];

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
    this.reqList.push(
      this.route.params.subscribe(params => {
        this.slug = params['slug'];
        this.reqList.push(
          this.fellowsService.get(this.slug).subscribe(data => {
            this.fellow = data as Fellow;
            this.cloneFellow();
            this.reqList.push(
              this.route.data.subscribe((d: { editMode }) => {
                this.editMode = d.editMode;
              })
            )
          })
        );
      })
    );
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
    const link = ['/fellow/edit', slug];
    this.router.navigate(link);
  }

  getFullPost() {
    return [this.fellow.post, this.fellow.post_sci, this.fellow.post_academy].filter(x => x).join(', ');
  }

  save() {
    this.reqList.push(
      this.fellowsService.update(this.slug, this.newFellow).subscribe(params => {
        this.fellow = params;
        this.cancel();
      }, error => {

      })
    );
  }

  addPublication() {
    this.reqList.push(
      this.fellowsService.addPublication(this.slug, this.newPublication).subscribe((params: any) => {
        if (params) {
          this.fellow.publications.push(params);
          this.makeEmptyNewPublication();
        }
      })
    );
  }

  removePublication(publicationPk) {
    this.reqList.push(
      this.fellowsService.removePublication(this.slug, publicationPk).subscribe(() => {
        this.fellow.publications = this.fellow.publications.filter(x => x.pk !== publicationPk);
      })
    );
  }


  cancel() {
    this.cloneFellow();
    const link = ['/fellow/', this.slug];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.reqList.forEach(x => x.unsubscribe());
  }

  get fields() {
    const fields = [
      {
        model: this.fellow.user,
        fields: [
          {name: 'first_name', title: 'Имя'},
          {name: 'last_name', title: 'Фамилия'},
          {name: 'midle_name', title: 'Отчество'},
          {name: 'email', title: 'Адрес электронной почты', editable: false},
        ]
      },
      {
        model: this.fellow,
        fields: [
          {name: 'post', title: 'Должность'},
          {name: 'post_sci', title: 'Учёная степень'},
          {name: 'post_academy', title: 'Учёное звание'},
          {name: 'phone', title: 'Номер телефона'},
        ],
      }
    ];
    fields.forEach((x: any) => x.fields.forEach(y => {
        if (!y.value) {
          y.value = x.model[y.name];
        }
      })
    );
    return fields;
  }

}

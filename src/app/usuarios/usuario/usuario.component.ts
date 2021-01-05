import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { loadUser } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading: boolean;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('usuario')
      .subscribe(({ user, loading, error }) => {
        this.usuario = user;
      });

    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id }));
    });
  }

}

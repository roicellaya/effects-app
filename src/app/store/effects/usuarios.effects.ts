import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.loadUsers),
      // tap(data => console.info('effect tag ', data)),
      mergeMap(
        () => this.usuarioService.getUsers()
                .pipe(
                  // tap(data => console.info('getUsers effect ', data))
                  map(users => userActions.loadUsersSuccess({ usuarios: users })),
                  catchError(err => of(userActions.loadUsersError({ payload: err })))
                )
      )
    )
  );
}

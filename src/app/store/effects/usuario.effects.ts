import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.loadUser),
      // tap(data => console.info('effect tag ', data)),
      mergeMap(
        (action) => this.usuarioService.getUserById(action.id)
                .pipe(
                  // tap(data => console.info('getUsers effect ', data))
                  map(user => userActions.loadUserSuccess({ usuario: user })),
                  catchError(err => of(userActions.loadUserError({ payload: err })))
                )
      )
    )
  );
}

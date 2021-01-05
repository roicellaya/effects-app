import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ usuario: Usuario }>()  
);

export const loadUserError = createAction(
  '[User] Load User Error',
  props<{ payload: any }>()  
);

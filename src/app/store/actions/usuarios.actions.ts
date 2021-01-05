import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ usuarios: Usuario[] }>()  
);

export const loadUsersError = createAction(
  '[Users] Load Users Error',
  props<{ payload: any }>()  
);

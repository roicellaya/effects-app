import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from 'src/app/models/usuario.model';

export interface UsuariosState {
  users: Usuario[],
  loaded: boolean,
  loading: boolean,
  error: any
};

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

const _usuariosReducer = createReducer(
  usuariosInitialState,
  on(actions.loadUsers, state => ({ ...state, loading: true })),

  on(actions.loadUsersSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios]
  })),

  on(actions.loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
);

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}

import { CanActivateFn } from '@angular/router';

export const validateSessionGuard: CanActivateFn = (route, state) => {
  return true;
};

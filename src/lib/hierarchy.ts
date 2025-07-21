import { TerreiroRole } from '@/types'

export function isHigherRole(userRole: TerreiroRole, targetRole: TerreiroRole): boolean {
  const hierarchy = {
    [TerreiroRole.PAI]: 5,
    [TerreiroRole.MAE]: 5,
    [TerreiroRole.PAIS_MENORES]: 4,
    [TerreiroRole.FILHO]: 3,
    [TerreiroRole.ASSISTENCIA]: 1
  }
  
  return hierarchy[userRole] > hierarchy[targetRole]
}

export function canManageRole(userRole: TerreiroRole, targetRole: TerreiroRole): boolean {
  if (userRole === TerreiroRole.PAI || userRole === TerreiroRole.MAE) {
    return true
  }
  
  if (userRole === TerreiroRole.PAIS_MENORES) {
    return targetRole === TerreiroRole.FILHO || targetRole === TerreiroRole.ASSISTENCIA
  }
  
  return false
}

export function formatRoleName(role: TerreiroRole): string {
  const roleNames = {
    [TerreiroRole.PAI]: 'Pai de Santo',
    [TerreiroRole.MAE]: 'Mãe de Santo',
    [TerreiroRole.PAIS_MENORES]: 'Pais Menores',
    [TerreiroRole.FILHO]: 'Filho da Casa',
    [TerreiroRole.ASSISTENCIA]: 'Assistência'
  }
  
  return roleNames[role]
}

export function getRoleColor(role: TerreiroRole): string {
  const colors = {
    [TerreiroRole.PAI]: 'text-hierarchy-pai',
    [TerreiroRole.MAE]: 'text-hierarchy-mae',
    [TerreiroRole.PAIS_MENORES]: 'text-hierarchy-pais-menores',
    [TerreiroRole.FILHO]: 'text-hierarchy-filho',
    [TerreiroRole.ASSISTENCIA]: 'text-hierarchy-assistencia'
  }
  
  return colors[role]
}

export function canCreateEvent(userRole: TerreiroRole): boolean {
  return userRole !== TerreiroRole.ASSISTENCIA
}

export function canManageUsers(userRole: TerreiroRole): boolean {
  return [TerreiroRole.PAI, TerreiroRole.MAE, TerreiroRole.PAIS_MENORES].includes(userRole)
}

export function canAccessAdminDashboard(userRole: TerreiroRole): boolean {
  return userRole !== TerreiroRole.ASSISTENCIA
}

export function canModerateContent(userRole: TerreiroRole): boolean {
  return [TerreiroRole.PAI, TerreiroRole.MAE, TerreiroRole.PAIS_MENORES].includes(userRole)
}

export function canManagePermissions(userRole: TerreiroRole): boolean {
  return userRole === TerreiroRole.PAI || userRole === TerreiroRole.MAE
}

export function canCheckInOthers(userRole: TerreiroRole): boolean {
  return [TerreiroRole.PAI, TerreiroRole.MAE, TerreiroRole.PAIS_MENORES].includes(userRole)
}

export function canDeleteEvents(userRole: TerreiroRole, isEventCreator: boolean): boolean {
  if (userRole === TerreiroRole.PAI || userRole === TerreiroRole.MAE) {
    return true
  }
  
  if (userRole === TerreiroRole.PAIS_MENORES) {
    return true
  }
  
  return isEventCreator && userRole === TerreiroRole.FILHO
}

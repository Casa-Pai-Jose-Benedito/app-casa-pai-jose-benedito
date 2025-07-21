export enum TerreiroRole {
  PAI = 'pai',
  MAE = 'mae',
  PAIS_MENORES = 'pais_menores',
  FILHO = 'filho',
  ASSISTENCIA = 'assistencia'
}

export enum EventCategory {
  GIRA = 'gira',
  CERIMONIA = 'cerimonia',
  RESERVA_ESPACO = 'reserva_espaco'
}

export enum ReservationType {
  DEITADA = 'deitada',
  ACENDER_VELA = 'acender_vela',
  ENTREGA = 'entrega',
  TRABALHO_PESSOAL = 'trabalho_pessoal',
  OUTRO = 'outro'
}

export enum SpiritualEntity {
  CABOCLOS = 'caboclos',
  PRETOS_VELHO = 'pretos-velho',
  EXUS = 'exus',
  POMBO_GIRAS = 'pombo-giras',
  EXU_MIRINS = 'exu-mirins',
  ERES = 'eres',
  MARINHEIROS = 'marinheiros',
  BOIADEIROS = 'boiadeiros',
  CIGANOS = 'ciganos',
  MALANDROS = 'malandros',
  SEREIAS_OXUM = 'sereias-oxum',
  SEREIAS_IEMANJA = 'sereias-iemanja',
  BAIANOS = 'baianos',
  OXALA = 'oxala',
  LOGUNA = 'loguna',
  IEMANJA = 'iemanja',
  XANGO = 'xango',
  OGUM = 'ogum',
  OXOSSI = 'oxossi',
  OBA = 'oba',
  OBALUAE = 'obaluae',
  OMULU = 'omulu',
  OXUM = 'oxum',
  OXUMARE = 'oxumare',
  NANA = 'nana',
  LOGUNEDE = 'logunede',
  EGUNITÁ = 'egunita',
  OSSAIN = 'ossain'
}

export interface User {
  id: string
  email: string
  name: string
  role: TerreiroRole
  verified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  id: string
  title: string
  description?: string
  category: EventCategory
  startTime: Date
  endTime: Date
  createdBy: string
  maxParticipants?: number
  reservationType?: ReservationType
  participantCount?: number
  spiritualEntities: SpiritualEntity[]
  createdAt: Date
}

export interface EventParticipant {
  id: string
  eventId: string
  userId: string
  entityWork?: string
  checkedIn: boolean
  checkInTime?: Date
  notes?: string
  registeredAt: Date
}

export interface Permission {
  id: string
  category: string
  action: string
  resource: string
}

export interface UserPermission {
  userId: string
  permissionId: string
  grantedBy?: string
  grantedAt: Date
}

export interface FeedPost {
  id: string
  title: string
  content: string
  authorId: string
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CheckInData {
  eventId: string
  userId: string
  entityWork?: string
  notes?: string
}

export interface ConflictDetection {
  hasConflict: boolean
  conflictingEvents: Event[]
  timeOverlap: {
    start: Date
    end: Date
  }[]
}

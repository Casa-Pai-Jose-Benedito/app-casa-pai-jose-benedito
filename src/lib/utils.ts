import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatEventCategory(category: string): string {
  const categories = {
    'gira': 'Gira',
    'cerimonia': 'Cerimônia',
    'reserva_espaco': 'Reserva de Espaço'
  }
  
  return categories[category as keyof typeof categories] || category
}

export function formatSpiritualEntity(entity: string): string {
  const entities = {
    'caboclos': 'Caboclos',
    'pretos-velho': 'Pretos-Velho',
    'exus': 'Exus',
    'pombo-giras': 'Pombo-giras',
    'exu-mirins': 'Exu-mirins',
    'eres': 'Erês',
    'marinheiros': 'Marinheiros',
    'boiadeiros': 'Boiadeiros',
    'ciganos': 'Ciganos',
    'malandros': 'Malandros',
    'sereias-oxum': 'Sereias de Oxum',
    'sereias-iemanja': 'Sereias de Iemanjá',
    'baianos': 'Baianos',
    'oxala': 'Oxalá',
    'loguna': 'Logunã',
    'iemanja': 'Iemanjá',
    'xango': 'Xangô',
    'ogum': 'Ogum',
    'oxossi': 'Oxóssi',
    'oba': 'Obá',
    'obaluae': 'Obaluaê',
    'omulu': 'Omulu',
    'oxum': 'Oxum',
    'oxumare': 'Oxumaré',
    'nana': 'Nanã',
    'logunede': 'Logunedé',
    'egunita': 'Egunitá',
    'ossain': 'Ossain'
  }
  
  return entities[entity as keyof typeof entities] || entity
}

export function detectTimeConflict(
  startTime: Date,
  endTime: Date,
  existingEvents: { startTime: Date; endTime: Date }[]
): boolean {
  return existingEvents.some(event => {
    return (
      (startTime >= event.startTime && startTime < event.endTime) ||
      (endTime > event.startTime && endTime <= event.endTime) ||
      (startTime <= event.startTime && endTime >= event.endTime)
    )
  })
}

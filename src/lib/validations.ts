import { z } from 'zod'
import { TerreiroRole, EventCategory, ReservationType, SpiritualEntity } from '@/types'

export const emailSchema = z.string().email('Email inválido')

export const passwordSchema = z
  .string()
  .min(8, 'Senha deve ter pelo menos 8 caracteres')
  .regex(/[A-Z]/, 'Senha deve ter pelo menos uma letra maiúscula')
  .regex(/[a-z]/, 'Senha deve ter pelo menos uma letra minúscula')
  .regex(/\d/, 'Senha deve ter pelo menos um número')

export const userSchema = z.object({
  email: emailSchema,
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  role: z.nativeEnum(TerreiroRole)
})

export const eventSchema = z.object({
  title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
  description: z.string().optional(),
  category: z.nativeEnum(EventCategory),
  startTime: z.date(),
  endTime: z.date(),
  maxParticipants: z.number().positive().optional(),
  reservationType: z.nativeEnum(ReservationType).optional(),
  participantCount: z.number().positive().default(1),
  spiritualEntities: z.array(z.nativeEnum(SpiritualEntity)).default([])
}).refine(data => data.endTime > data.startTime, {
  message: 'Data de fim deve ser posterior à data de início',
  path: ['endTime']
}).refine(data => {
  if (data.category === EventCategory.RESERVA_ESPACO) {
    return data.reservationType && data.description
  }
  return true
}, {
  message: 'Reservas de espaço devem ter tipo e descrição',
  path: ['reservationType']
}).refine(data => {
  if (data.category === EventCategory.GIRA) {
    return data.spiritualEntities.length > 0
  }
  return true
}, {
  message: 'Giras devem ter pelo menos uma entidade espiritual selecionada',
  path: ['spiritualEntities']
})

export const checkInSchema = z.object({
  eventId: z.string().cuid(),
  userId: z.string().cuid(),
  entityWork: z.string().optional(),
  notes: z.string().max(500, 'Notas devem ter no máximo 500 caracteres').optional()
})

export const feedPostSchema = z.object({
  title: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
  content: z.string().min(10, 'Conteúdo deve ter pelo menos 10 caracteres'),
  published: z.boolean().default(true)
})

export const permissionSchema = z.object({
  category: z.string().min(1, 'Categoria é obrigatória'),
  action: z.enum(['create', 'read', 'update', 'delete']),
  resource: z.string().min(1, 'Recurso é obrigatório')
})

export const consentSchema = z.object({
  privacyPolicyVersion: z.string(),
  ipAddress: z.string().regex(
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/,
    'Endereço IP inválido'
  ).optional()
})

export const meetingMinuteSchema = z.object({
  title: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
  content: z.string().min(10, 'Conteúdo deve ter pelo menos 10 caracteres'),
  meetingDate: z.date()
})

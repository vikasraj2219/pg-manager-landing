import { ComponentType } from 'react'
import PropertyVisual from '../components/visuals/PropertyVisual'
import RoomBedVisual from '../components/visuals/RoomBedVisual'
import TenantVisual from '../components/visuals/TenantVisual'
import KycVisual from '../components/visuals/KycVisual'
import RentVisual from '../components/visuals/RentVisual'
import PaymentsVisual from '../components/visuals/PaymentsVisual'
import ExpensesVisual from '../components/visuals/ExpensesVisual'
import MaintenanceVisual from '../components/visuals/MaintenanceVisual'
import StaffVisual from '../components/visuals/StaffVisual'
import AnalyticsVisual from '../components/visuals/AnalyticsVisual'

export const visualRegistry: Record<string, ComponentType> = {
  property: PropertyVisual,
  roombed: RoomBedVisual,
  tenant: TenantVisual,
  kyc: KycVisual,
  rent: RentVisual,
  payments: PaymentsVisual,
  expenses: ExpensesVisual,
  maintenance: MaintenanceVisual,
  staff: StaffVisual,
  analytics: AnalyticsVisual,
}

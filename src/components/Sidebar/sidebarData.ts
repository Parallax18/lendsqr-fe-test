import GuarantorsIcon from "styles/icons/GuarantorsIcon";
import LoansIcon from "styles/icons/LoansIcon";
import DecisionModelsIcon from "styles/icons/DecisionModelsIcon";
import SavingsIcon from "styles/icons/SavingsIcon";
import LoanRequestIcon from "styles/icons/LoanRequestIcon";
import WhiteliistIcon from "styles/icons/WhiteliistIcon";
import KarmaIcon from "styles/icons/KarmaIcon";
import OrganizationIcon from "styles/icons/OrganizationIcon";
import LoanProductsIcon from "styles/icons/LoanProductsIcon";
import SavingsProductsIcon from "styles/icons/SavingsProductsIcon";
import FeesChargesIcon from "styles/icons/FeesChargesIcon";
import TransactionsIcon from "styles/icons/TransactionsIcon";
import ServicesIcon from "styles/icons/ServicesIcon";
import ServiceAccountIcon from "styles/icons/ServiceAccountIcon";
import SettlementsIcon from "styles/icons/SettlementsIcon";
import ReportsIcon from "styles/icons/ReportsIcon";
import PrefrencesIcon from "styles/icons/PrefrencesIcon";
import FeesPricingIcon from "styles/icons/FeesPricingIcon";
import AuditLogsIcon from "styles/icons/AuditLogsIcon";
import SidebarUserIcon from "styles/icons/SidebarUserIcon";

export const sidebarData = [
    {
        title: 'customers',
        items: [
            {
                text: 'Users',
                icon: SidebarUserIcon,
                path: 'users'
            },
            {
                text: 'Guarantors',
                icon: GuarantorsIcon,
                path: '/dashboard'
            },
            {
                text: 'Loans',
                icon: LoansIcon,
                path: '/dashboard'
            },
            {
                text: 'Decision Models',
                icon: DecisionModelsIcon,
                path: '/dashboard'

            },
            {
                text: 'Savings',
                icon: SavingsIcon,
                path: '/dashboard'

            },
            {
                text: 'Loan Requests',
                icon: LoanRequestIcon,
                path: '/dashboard'

            },
            {
                text: 'Whitelist',
                icon: WhiteliistIcon,
                path: '/dashboard'

            },
            {
                text: 'Karma',
                icon: KarmaIcon,
                path: '/dashboard'

            }
        ]
    },
    {
        title: 'Businesses',
        items: [
            {
                text: 'Organizaton',
                icon: OrganizationIcon,
                path: '/dashboard'
            },
            {
                text: 'Loan Products',
                icon: LoanProductsIcon,
                path: '/dashboard'

            },
            {
                text: 'Savings Products',
                icon: SavingsProductsIcon,
                path: '/dashboard'
            },
            {
                text: 'Fees and Charges',
                icon: FeesChargesIcon,
                path: '/dashboard'
            },
            {
                text: 'Transactions',
                icon: TransactionsIcon,
                path: '/dashboard'
            },
            {
                text: 'Services',
                icon: ServicesIcon,
                path: '/dashboard'
            },
            {
                text: 'Service Account',
                icon: ServiceAccountIcon,
                path: '/dashboard'
            },
            {
                text: 'Settlements',
                icon: SettlementsIcon,
                path: '/dashboard'
            },
            {
                text: 'Reports',
                icon: ReportsIcon,
                path: '/dashboard'
            }
        ]
    },
    {
        title: 'settings',
        items: [
            {
                text: 'Preferences',
                icon: PrefrencesIcon,
                path: '/dashboard'
            },
            {
                text: 'Fees and Pricing',
                icon: FeesPricingIcon,
                path: '/dashboard'
            },
            {
                text: 'Audit Logs',
                icon: AuditLogsIcon,
                path: '/dashboard'
            }
        ]
    }
]
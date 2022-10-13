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
                icon: SidebarUserIcon
            },
            {
                text: 'Guarantors',
                icon: GuarantorsIcon
            },
            {
                text: 'Loans',
                icon: LoansIcon
            },
            {
                text: 'Decision Models',
                icon: DecisionModelsIcon
            },
            {
                text: 'Savings',
                icon: SavingsIcon
            },
            {
                text: 'Loan Requests',
                icon: LoanRequestIcon
            },
            {
                text: 'Whitelist',
                icon: WhiteliistIcon
            },
            {
                text: 'Karma',
                icon: KarmaIcon
            }
        ]
    },
    {
        title: 'Businesses',
        items: [
            {
                text: 'Organizaton',
                icon: OrganizationIcon
            },
            {
                text: 'Loan Products',
                icon: LoanProductsIcon
            },
            {
                text: 'Savings Products',
                icon: SavingsProductsIcon
            },
            {
                text: 'Fees and Charges',
                icon: FeesChargesIcon
            },
            {
                text: 'Transactions',
                icon: TransactionsIcon
            },
            {
                text: 'Services',
                icon: ServicesIcon
            },
            {
                text: 'Service Account',
                icon: ServiceAccountIcon
            },
            {
                text: 'Settlements',
                icon: SettlementsIcon
            },
            {
                text: 'Reports',
                icon: ReportsIcon
            }
        ]
    },
    {
        title: 'settings',
        items: [
            {
                text: 'Preferences',
                icon: PrefrencesIcon
            },
            {
                text: 'Fees and Pricing',
                icon: FeesPricingIcon
            },
            {
                text: 'Audit Logs',
                icon: AuditLogsIcon
            }
        ]
    }
]
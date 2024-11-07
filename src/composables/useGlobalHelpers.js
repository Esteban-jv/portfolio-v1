import { useI18n } from "vue-i18n";

export function useGlobalHelpers() {
    const { t } = useI18n()

    return {
        $t: t
    }
}
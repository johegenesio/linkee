import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24
    },
    title: {
        color: colors.green[900],
        fontSize: 24,
        fontWeight: 600,
    },
    header: {
        paddingHorizontal: 24,
        width: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo: {
        height: 32,
        width: 32
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600]
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderWidth: 1,
        borderColor: colors.gray[800],
        paddingBottom: 32,
        padding: 24,
        borderRadius: 18
    },
    modalHeader: {
        width: "auto",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[400],
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200],
    },
    modalUrl: {
        fontSize: 14,
        color: colors.gray[400],
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "auto",
        justifyContent: "space-between",
    },
})
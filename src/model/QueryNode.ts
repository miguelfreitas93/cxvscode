import * as vscode from "vscode";
import { INode } from "../interface/INode";
import { SeverityNode } from "./SeverityNode";
import { Utility } from "../utils/util";

export class QueryNode implements INode {

    constructor(public query: any | undefined,
        public parentNode: SeverityNode) {
    }

    public getTreeItem(): vscode.TreeItem {
        return {
            label: this.query?.$.name + " (" + this.query?.Result.length + " found)",
            collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
            contextValue: "query_node",
            iconPath: {
                "light": Utility.getIconPerSeverity(this.query?.$.Severity, "light"),
                "dark": Utility.getIconPerSeverity(this.query?.$.Severity, "dark")
            }
        };
    }

    public async getChildren(): Promise<INode[]> {
        return [];
    }
}
import * as React from 'react'
import { Dialog, DialogContent, DialogFooter } from '../dialog'
import { OkCancelButtonGroup } from '../dialog/ok-cancel-button-group'
import { Ref } from '../lib/ref'
import { Branch } from '../../models/branch'

interface ICantDeleteCurrentBranchProps {
  readonly branchToDelete: Branch
  readonly blockedByBranch: Branch
  readonly onDismissed: () => void
}

export class CantDeleteCurrentBranch extends React.Component<ICantDeleteCurrentBranchProps> {
  public render() {
    const { branchToDelete, blockedByBranch } = this.props
    return (
      <Dialog
        id="cant-delete-current-branch"
        title={__DARWIN__ ? 'Cannot Delete Branch' : 'Cannot delete branch'}
        onSubmit={this.props.onDismissed}
        onDismissed={this.props.onDismissed}
      >
        <DialogContent>
          <p>
            You cannot delete the currently used branch because{' '}
            <Ref>{blockedByBranch.name}</Ref> is in use by another worktree so
            it cannot be checked out automatically.
          </p>
          <p>
            Consider switching to a new branch before deleting{' '}
            <Ref>{branchToDelete.name}</Ref>.
          </p>
        </DialogContent>
        <DialogFooter>
          <OkCancelButtonGroup
            okButtonText="Close"
            cancelButtonVisible={false}
          />
        </DialogFooter>
      </Dialog>
    )
  }
}

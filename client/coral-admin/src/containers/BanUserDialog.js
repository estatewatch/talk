import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BanUserDialog from '../components/BanUserDialog';
import {hideBanUserDialog} from '../actions/banUserDialog';
import {withSetUserStatus, withSetCommentStatus} from 'coral-framework/graphql/mutations';
import {compose} from 'react-apollo';
import t from 'coral-framework/services/i18n';

class BanUserDialogContainer extends Component {

  banUser = async () => {
    const {userId, commentId, commentStatus, setUserStatus, setCommentStatus, hideBanUserDialog} = this.props;
    await setUserStatus({userId, status: 'BANNED'});
    hideBanUserDialog();
    if (commentId && commentStatus && commentStatus !== 'REJECTED') {
      await setCommentStatus({commentId, status: 'REJECTED'});
    }
  }

  getInfo() {
    let note = t('bandialog.note_ban_user');
    if (this.props.commentStatus && this.props.commentStatus !== 'REJECTED') {
      note = t('bandialog.note_reject_comment');
    }
    return t('bandialog.note', note);
  }

  render() {
    return (
      <BanUserDialog
        open={this.props.open}
        onPerform={this.banUser}
        onCancel={this.props.hideBanUserDialog}
        username={this.props.username}
        info={this.getInfo()}
      />
    );
  }
}

const mapStateToProps = ({banUserDialog: {open, userId, username, commentId, commentStatus}}) => ({
  open,
  userId,
  username,
  commentId,
  commentStatus,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    hideBanUserDialog,
  }, dispatch),
});

export default compose(
  withSetUserStatus,
  withSetCommentStatus,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(BanUserDialogContainer);

;/*FB_PKG_DELIM*/

__d("PolarisFollowListEmptyState.react",["PolarisIGCoreBox","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.icon,d=a.subtitle,e=a.suggestedContent;a=a.title;return h.jsxs(c("PolarisIGCoreBox"),{flex:"grow",overflow:"scrollY",children:[h.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",justifyContent:"center",paddingY:10,children:[b,h.jsx(c("PolarisIGCoreBox"),{paddingY:5,children:h.jsx(c("PolarisIGCoreText").Headline2,{children:a})}),h.jsx(c("PolarisIGCoreText").Body,{children:d})]}),e]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisEmptyFollowList.react",["fbt","PolarisAssetManagerGlyphMapping","PolarisConnectionsLogger","PolarisFetchingSuggestedUserList.react","PolarisFollowListEmptyState.react","PolarisIGCoreIcon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={followers:h._("Seguidores"),following:h._("Pessoas que voc\u00ea segue"),hashtag_following:h._("Pessoas que voc\u00ea segue")},k={followers:h._("Voc\u00ea ver\u00e1 todas as pessoas que seguem voc\u00ea aqui."),following:h._("Ao seguir pessoas, voc\u00ea as ver\u00e1 aqui."),hashtag_following:h._("Ao seguir pessoas, voc\u00ea as ver\u00e1 aqui.")};function a(a){var b=a.containerModule;a=a.connectionListType;b=i.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:b,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.follower_list});return i.jsx(c("PolarisFollowListEmptyState.react"),{icon:i.jsx(c("PolarisIGCoreIcon"),{alt:j[a],icon:d("PolarisAssetManagerGlyphMapping").ICONS.ADD_FRIEND_OUTLINE_96}),subtitle:k[a],suggestedContent:b,title:j[a]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisHashtagFollowListContent.react",["cx","fbt","IGRouter","PolarisFollowListEmptyState.react","PolarisHashtagFollowListState","PolarisHashtagLink.react","PolarisIGCoreListItem","PolarisIGCoreListItemPlaceholder","PolarisIGCoreText","PolarisLogger","PolarisPostsStatistic.react","PolarisReactRedux","PolarisScrollableContainer.react","PolarisTagAvatar.react","PolarisTagFollowButton.react","PolarisuserSelectors","nullthrows","range","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k="following_list_follow_button",l="self_following_hashtags",m="following_hashtags",n="hashtagFollowList",o=10;b=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.componentDidMount=function(){d("PolarisLogger").logPageView(n)};e.getEmptyState=function(){var a=this.props,b=a.userId,d=a.username;a=a.viewerId;b=b===a;a=b?i._("Hashtags que voc\u00ea segue"):i._("Seguir hashtags");b=b?i._("Quando voc\u00ea seguir hashtags, voc\u00ea as ver\u00e1 aqui."):i._("{username} n\u00e3o est\u00e1 seguindo nenhuma hashtag no momento.",[i._param("username",j.jsx(c("PolarisIGCoreText"),{weight:"semibold",children:d}))]);return j.jsx(c("PolarisFollowListEmptyState.react"),{icon:j.jsx("div",{className:"_aabo",children:j.jsx("span",{className:"_aabp",children:"#"})}),subtitle:b,title:a})};e.render=function(){if(this.props.isLoading)return j.jsx(d("PolarisScrollableContainer.react").ScrollableContainer,{className:"_aabq",children:c("range")(0,o).map(function(a){return j.jsx(c("PolarisIGCoreListItemPlaceholder"),{},a)})});var a=this.props.viewerId===this.props.userId?l:m,b=this.props.tagList;if(b.length<1)return this.getEmptyState();b=b.map(function(b){var d=b.id,e=b.name,f=b.postCount;b=b.profilePictureUrl;b=j.jsx(c("PolarisTagAvatar.react"),{className:"_aabr",isLink:!0,profilePictureUrl:b,size:30,tagName:e});d=j.jsx(c("PolarisTagFollowButton.react"),{id:d,loggingClickPoint:k,loggingContainerModule:a,tagName:e});return j.jsx(c("PolarisIGCoreListItem"),{action:d,icon:b,subtitle:j.jsx(c("PolarisPostsStatistic.react"),{value:f,variant:"unstyled"}),title:j.jsx(c("PolarisIGCoreText").BodyEmphasized,{children:j.jsx(c("PolarisHashtagLink.react"),{className:"_aabs",tag:e})})},e)});return j.jsx(d("PolarisScrollableContainer.react").ScrollableContainer,{className:"_aabq",children:b})};return b}(j.Component);function p(a){a=d("IGRouter").igMatchPath(a,{path:"/:username/:type/"});return a==null?void 0:(a=a.params)==null?void 0:a.username}function a(a,b){var e=b.location;b=b.match;b=(b=b.params.username)!=null?b:c("nullthrows")(p(e.pathname));e=d("PolarisuserSelectors").getUserByUsername(a,b);e=e&&e.id;var f=d("PolarisuserSelectors").getViewer(a),g=a.hashtagFollowList.get(e),h=(g==null?void 0:g.followList)||d("PolarisHashtagFollowListState").EMPTY_LIST,i=[];h.toSeq().forEach(function(b){var c=a.tags.get(b);c!=null&&i.push(babelHelpers["extends"]({},c,{name:b}))});return{isLoading:!!(g==null?void 0:g.isLoading),tagList:i,userId:e,username:b,viewerId:c("nullthrows")(f&&f.id)}}e=d("IGRouter").withIGRouter(d("PolarisReactRedux").connect(a,null)(b));g["default"]=e}),98);
__d("PolarisEmptyFeedCardTemplates",["cx","fbt","PolarisAssetManagerGlyphMapping","PolarisIGCoreBox","PolarisIGCoreIconButton","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k={AVATAR:{HEIGHT:88,WIDTH:88},CARD:{HEIGHT:344,WIDTH:236},IMAGE:{HEIGHT:74,WIDTH:74}};function l(a){var b=a.children;a=a.onClick;return j.jsx("div",{onClick:a,role:"link",tabIndex:"0",children:j.jsx(c("PolarisIGCoreBox"),{alignItems:"center",color:"ig-primary-background",dangerouslySetClassName:{__className:"_abw2"},flex:"grow",height:k.CARD.HEIGHT,padding:1,width:k.CARD.WIDTH,children:b})})}l.displayName=l.name+" [from "+f.id+"]";a=function(a){var b=a.body,e=a.button,f=a.header,g=a.icon;a=a.onDismiss;return j.jsxs(l,{children:[j.jsx(c("PolarisIGCoreBox"),{alignItems:"center",dangerouslySetClassName:{__className:"_abw3"},height:k.AVATAR.HEIGHT,justifyContent:"center",marginTop:11,shape:"circle",width:k.AVATAR.WIDTH,children:g}),j.jsx(c("PolarisIGCoreBox"),{padding:3,children:j.jsx(c("PolarisIGCoreText").Headline2,{textAlign:"center",children:f})}),a&&j.jsx(c("PolarisIGCoreBox"),{position:"absolute",right:!0,children:j.jsx(c("PolarisIGCoreIconButton"),{alt:i._("Ignorar"),icon:d("PolarisAssetManagerGlyphMapping").ICONS.GREY_CLOSE,onClick:a})}),j.jsx(c("PolarisIGCoreBox"),{flex:"grow",paddingX:3,children:j.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",textAlign:"center",children:b})}),j.jsx(c("PolarisIGCoreBox"),{marginBottom:5,children:e})]})};g.SIZES=k;g.UpsellCard=a}),98);
__d("PolarisRelationshipActionRemoveFollower",["PolarisFunctionalityTracker","PolarisSharedAPI"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c){c===void 0&&({});var e=new(d("PolarisFunctionalityTracker").FunctionalityTracker)("remove_follower");return function(b,c){e.attempt();var f=c().users.viewerId;b({type:"REMOVE_FOLLOWER",subjectUserId:a});e.request();d("PolarisSharedAPI").removeFollower(a).then(function(c){e.responseSuccess(),b({type:"REMOVE_FOLLOWER_SUCCEEDED",subjectUserId:a,viewerId:f}),e.completeSuccess()},function(c){e.responseFailure(),b({type:"REMOVE_FOLLOWER_FAILED",subjectUserId:a,viewerId:f}),e.completeFailure()})}}g.removeFollower=a}),98);
__d("PolarisRemoveFollowerButton.react",["fbt","IGCoreDialog","PolarisEmptyFeedCardTemplates","PolarisGenericStrings","PolarisIGCoreButton","PolarisIGCoreDialogCircleMedia","PolarisReactRedux","PolarisRelationshipActionRemoveFollower","PolarisRelationshipTypes","PolarisUserAvatar.react","PolarisrelationshipSelectors","PolarisuserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState,l=h._("Remover seguidor?"),m=h._("Remover"),n=h._("Removido(a)");function o(a){var b=a.onCancel,e=a.onConfirm,f=a.userId;a=d("PolarisReactRedux").useSelector(function(a){return d("PolarisuserSelectors").getUserById(a,f)});var g=a.profilePictureUrl;a=a.username;var j=h._("O Instagram n\u00e3o avisar\u00e1 {Username of current profile} de que ele(a) foi removido(a) dos seus seguidores.",[h._param("Username of current profile",a)]);g=i.jsx(c("PolarisIGCoreDialogCircleMedia"),{icon:i.jsx(c("PolarisUserAvatar.react"),{isLink:!0,profilePictureUrl:g,size:d("PolarisEmptyFeedCardTemplates").SIZES.AVATAR.HEIGHT,username:a})});return i.jsxs(d("IGCoreDialog").IGCoreDialog,{body:j,media:g,onModalClose:b,title:l,children:[i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:e,children:m}),i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:b,children:d("PolarisGenericStrings").CANCEL_TEXT})]})}o.displayName=o.name+" [from "+f.id+"]";function a(a){var b=a.analyticsContext,e=a.analyticsExtra,f=e===void 0?{}:e,g=a.userId;e=d("PolarisReactRedux").useSelector(function(a){return d("PolarisrelationshipSelectors").getRelationship(a.relationships,g)});a=k(!1);var h=a[0],l=a[1],p=d("PolarisReactRedux").useDispatch();a=j(function(){l(!0)},[l]);var q=j(function(){p(d("PolarisRelationshipActionRemoveFollower").removeFollower(g,b,f)),l(!1)},[b,f,p,l,g]),r=j(function(){return l(!1)},[l]),s=m,t=!1;e.followsViewer.state===d("PolarisRelationshipTypes").FOLLOW_STATUS_NOT_FOLLOWING&&(s=n,t=!0);return i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisIGCoreButton"),{color:"ig-secondary-button",disabled:t,loading:!e.followsViewer.stable,onClick:a,children:s}),h&&i.jsx(o,{onCancel:r,onConfirm:q,userId:g})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserFollowListContent.react",["cx","fbt","IGRouter","PolarisBigNumber.react","PolarisConnectionsLogger","PolarisEmptyFollowList.react","PolarisFetchingSuggestedUserList.react","PolarisFollowButtonContainer.react","PolarisFollowListActions","PolarisFollowListState","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreListItemPlaceholder","PolarisIGCoreText","PolarisLogger","PolarisPaginationUtils","PolarisReactRedux","PolarisRelationshipTypes","PolarisRemoveFollowerButton.react","PolarisScrollWatchedComponent.react","PolarisScrollableContainer.react","PolarisUserList.react","PolarisrelationshipSelectors","PolarisuserSelectors","nullthrows","qex","range","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k="followList",l={x:1,y:2},m=4,n=10;e=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$4=function(){c.$2()&&c.props.requestNextFollowListPage(c.props.userId,c.props.connectionListType,c.props.viewType)},b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.componentDidMount=function(){var a;(a=this.$1)==null?void 0:a.handleVisibilityChange();d("PolarisLogger").logPageView(k,{followType:this.props.followType});d("PolarisLogger").logPageView(k,{connectionListType:this.props.connectionListType})};e.componentDidUpdate=function(a){this.$1&&this.$2()&&a.userIds!==this.props.userIds&&this.$1.forceRecompute()};e.$3=function(){return this.props.connectionListType==="followers"&&this.props.viewerId===this.props.userId};e.$2=function(){var a=this.props.hasMore||this.props.viewType==="mutualFirst"&&this.props.hasMoreMutuals;return this.props.viewType!=="mutualOnly"&&a&&!this.props.isLoading};e.$5=function(a,b,c){c=!!c;if(a)return d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.profile_social_context;switch(b){case"inbound":return c?d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.self_followers:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.followers;case"outbound":return c?d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.self_following:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.following}return d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.followers};e.$6=function(){var a=this.props,b=a.hasMoreMutuals,c=a.mutualUserIds,d=a.userIds;a=a.viewType;if(a==="mutualOnly")return c.slice(0,m);else if(a==="mutualFirst"){if(b)return c;a=d.filter(function(a){return!c.includes(a)});return[].concat(c,a)}return d};e.$7=function(){var a,b=this.props.user;a=b==null?void 0:(a=b.counts)==null?void 0:(a=a.followedBy)==null?void 0:a.valueOf();return a!=null&&a>4e3&&b.isVerified===!0?a:null};e.render=function(){var a=this,b=this.props,e=b.canSeeFollowList,f=b.followType,g=b.connectionListType,h=b.hasMore,k=b.hasMoreMutuals,m=b.isLoading,o=b.user,p=b.userId,q=b.viewType;b=b.viewerId;var r=this.$6();q=q==="mutualOnly";var s=this.$5(q,f,b);k=q?k:h;var t=this.$7();f=f==="inbound"&&b!==p&&t!==null&&(this.props.shouldLimitListOfFollowers||o.isBusinessAccount===!0||o.isProfessionalAccount===!0&&c("qex")._("166")===!0);if(r.length===0)return!k?j.jsx(c("PolarisEmptyFollowList.react"),{connectionListType:g,containerModule:s}):j.jsx(d("PolarisScrollableContainer.react").ScrollableContainer,{className:"_aano",children:c("range")(0,n).map(function(a){return j.jsx(c("PolarisIGCoreListItemPlaceholder"),{},a)})});b=12;p=r.length<=b;k=p||q;var u=this.$3();g=function(b,e){return e==null?null:a.props.viewerId!==b&&e.followedByViewer.state===d("PolarisRelationshipTypes").FOLLOW_STATUS_NOT_FOLLOWING?j.jsx(c("PolarisFollowButtonContainer.react"),{analyticsContext:s,borderless:u,isInline:!0,relationship:e,useSmallText:u,userId:b,username:o.username,viewerLoggedIn:a.props.viewerId!=null}):null};b=function(b){return a.props.viewerId!==b?j.jsx(c("PolarisRemoveFollowerButton.react"),{analyticsContext:s,userId:b}):null};return j.jsxs(d("PolarisScrollableContainer.react").ScrollableContainer,{className:"_aano",children:[!q&&f&&j.jsx(c("PolarisIGCoreBox"),{alignItems:"center",justifyContent:"center",paddingY:5,children:j.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",children:i._("Somente {account owner username} pode ver todos os seguidores.",[i._param("account owner username",j.jsxs(c("PolarisIGCoreText"),{color:"ig-secondary-text",weight:"semibold",children:[this.props.username,"  "]}))])})}),j.jsx(c("PolarisUserList.react"),{analyticsContext:s,avatarTriggerAnalyticsContext:"follower_list_avatar",borderlessFollowButton:u,isLoading:m,primaryActionButton:this.props.connectionListType==="followers"&&this.props.viewerId===this.props.userId?b:void 0,secondaryActionButton:u?g:void 0,userIds:r,usernameTriggerAnalyticsContext:"follower_list"}),q&&!m&&e&&j.jsx(c("PolarisIGCoreBox"),{margin:4,children:j.jsx(c("PolarisIGCoreButton"),{borderless:!0,href:"/"+c("nullthrows")(this.props.username)+"/followers/mutualFirst",children:i._("Ver todos os seguidores")})}),this.$2()&&j.jsx(c("PolarisScrollWatchedComponent.react"),{boundScaleFactor:l,className:"_aanq",onScrollEnter:this.$4,ref:function(b){return a.$1=b}}),!q&&f&&t!==null&&j.jsx(c("PolarisIGCoreBox"),{alignItems:"start",paddingX:3,paddingY:3,children:j.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",children:i._("E {number of other followers account owner has}",[i._param("number of other followers account owner has",j.jsxs(c("PolarisIGCoreText"),{color:"ig-secondary-text",weight:"semibold",children:[j.jsx(c("PolarisBigNumber.react"),{shortenNumber:!0,value:t-50}),"  ","others"]}))])})}),k&&!h&&((p=o.groupMetadata)==null?void 0:p.is_group)!==!0&&j.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:s,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.follower_list})]})};return b}(j.Component);function o(a){a=d("IGRouter").igMatchPath(a,{path:"/:username/:type/:viewType?/"});return a==null?void 0:a.params}function a(a,b){var e,f,g=b.location;b=b.match;b=b.params;b.username==null&&(b=c("nullthrows")(o(g.pathname)));var h;c("nullthrows")((g=b.type)!=null?g:b.tab)==="following"?(g="outbound",h="following"):c("nullthrows")((e=b.type)!=null?e:b.tab)==="admins"?(g="groupAdmins",h="admins"):(g="inbound",h="followers");e=c("nullthrows")(b.username);var i=d("PolarisuserSelectors").getViewer(a),j=c("nullthrows")(d("PolarisuserSelectors").getUserByUsername(a,e)),k=j.id,l=a.followLists.get(k,d("PolarisFollowListState").EMPTY_LISTS)[g],m=a.followLists.get(k,d("PolarisFollowListState").EMPTY_LISTS)[g+"Mutual"];a=a.relationships;f=(f=b.viewType)!=null?f:b.view_type;return{canSeeFollowList:d("PolarisrelationshipSelectors").canViewerSeeFollowList(a,i,j),followType:g,connectionListType:h,isLoading:d("PolarisPaginationUtils").isFetching(l.pagination)||d("PolarisPaginationUtils").isFetching(m.pagination),hasMore:d("PolarisPaginationUtils").hasNextPage(l.pagination)!==!1,hasMoreMutuals:d("PolarisPaginationUtils").hasNextPage(m.pagination)!==!1,mutualUserIds:m.userIds.toArray(),shouldLimitListOfFollowers:l.shouldLimitListOfFollowers,user:j,userId:k,username:e,userIds:l.userIds.toArray(),viewType:f,viewerId:i==null?void 0:i.id}}function b(a){return{requestNextFollowListPage:function(b,c,e){return a(d("PolarisFollowListActions").requestNextFollowListPage(b,c,e==="mutualFirst"))}}}f=d("IGRouter").withIGRouter(d("PolarisReactRedux").connect(a,b)(e));g["default"]=f}),98);
__d("PolarisFollowListTabs.react",["fbt","IGDSText.react","IGDSisUsingUpdatedFonts","IGRouter","PolarisHashtagFollowListContent.react","PolarisIGCoreTabV2","PolarisIGCoreTabsV2","PolarisLinkBuilder","PolarisUserFollowListContent.react","nullthrows","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Pessoas"),k=h._("Hashtags");function l(a){a=a.text;var b=c("IGDSisUsingUpdatedFonts")();return b?i.jsx(c("IGDSText.react").BodyEmphasized,{color:"link",children:a}):a}function a(a){a=a.match;a=c("nullthrows")(a.params.username);return i.jsxs(c("PolarisIGCoreTabsV2"),{children:[i.jsx(c("PolarisIGCoreTabV2"),{node:i.jsx(c("PolarisUserFollowListContent.react"),{}),path:d("PolarisLinkBuilder").buildUserFollowingLink(a),children:i.jsx(l,{text:j})}),i.jsx(c("PolarisIGCoreTabV2"),{node:i.jsx(c("PolarisHashtagFollowListContent.react"),{}),path:d("PolarisLinkBuilder").buildUserHashtagFollowingLink(a),children:i.jsx(l,{text:k})})]})}a.displayName=a.name+" [from "+f.id+"]";b=d("IGRouter").withIGRouter(a);g["default"]=b}),98);
__d("PolarisFollowListContent.react",["PolarisConfig","PolarisFollowListTabs.react","PolarisUserFollowListContent.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.connectionListType;var b=d("PolarisConfig").passesServerChecks(d("PolarisConfig").SERVER_CHECK_KEYS.HASHTAG_FOLLOW_ENABLE);return(a==="following"||a==="hashtag_following")&&b?h.jsx(c("PolarisFollowListTabs.react"),{}):h.jsx(c("PolarisUserFollowListContent.react"),{})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFollowListHelper",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";var i=h._("Seguidores"),j=h._("Membros"),k=h._("Administradores"),l=h._("Seguindo");function a(a){switch(a){case"followers":return i;case"members":return j;case"admins":return k;default:return l}}g.getFollowListHeader=a}),98);
__d("PolarisFollowListModal.react",["IGCoreModal","PolarisFollowListContent.react","PolarisFollowListHelper","PolarisIGCoreBox","PolarisIGCoreModalHeader","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.connectionListType;a=a.onClose;var e=d("PolarisFollowListHelper").getFollowListHeader(b);return h.jsx(c("IGCoreModal"),{"aria-label":e,onClose:a,children:h.jsxs(c("PolarisIGCoreBox"),{flex:"grow",maxHeight:400,minHeight:200,children:[h.jsx(c("PolarisIGCoreModalHeader"),{onClose:a,children:e}),h.jsx(c("PolarisFollowListContent.react"),{connectionListType:b})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
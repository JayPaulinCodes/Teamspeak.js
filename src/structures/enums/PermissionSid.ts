export enum PermissionSid {
    /**
     * b_serverinstance_help_view: Retrieve information about ServerQuery commands
     */
    b_serverinstance_help_view = 1,

    /**
     * b_serverinstance_info_view: Retrieve global server information
     */
    b_serverinstance_info_view = 2,

    /**
     * b_serverinstance_virtualserver_list: List virtual servers stored in the database
     */
    b_serverinstance_virtualserver_list = 3,

    /**
     * b_serverinstance_binding_list: List active IP bindings on multi-homed machines
     */
    b_serverinstance_binding_list = 4,

    /**
     * b_serverinstance_permission_list: List permissions available available on the server instance
     */
    b_serverinstance_permission_list = 5,

    /**
     * b_serverinstance_permission_find: Search permission assignments by name or ID
     */
    b_serverinstance_permission_find = 6,

    /**
     * b_virtualserver_create: Create virtual servers
     */
    b_virtualserver_create = 7,

    /**
     * b_virtualserver_delete: Delete virtual servers
     */
    b_virtualserver_delete = 8,

    /**
     * b_virtualserver_start_any: Start any virtual server in the server instance
     */
    b_virtualserver_start_any = 9,

    /**
     * b_virtualserver_stop_any: Stop any virtual server in the server instance
     */
    b_virtualserver_stop_any = 10,

    /**
     * b_virtualserver_change_machine_id: Change a virtual servers machine ID
     */
    b_virtualserver_change_machine_id = 11,

    /**
     * b_virtualserver_change_template: Edit virtual server default template values
     */
    b_virtualserver_change_template = 12,

    /**
     * b_serverquery_login: Login to ServerQuery
     */
    b_serverquery_login = 13,

    // ADD DOCS
    /**
     * b_serverquery_login_create: TBD
     */
    b_serverquery_login_create = 14,

    // ADD DOCS
    /**
     * b_serverquery_login_delete: TBD
     */
    b_serverquery_login_delete = 15,

    // ADD DOCS
    /**
     * b_serverquery_login_list: TBD
     */
    b_serverquery_login_list = 16,

    /**
     * b_serverinstance_textmessage_send: Send text messages to all virtual servers at once
     */
    b_serverinstance_textmessage_send = 17,

    /**
     * b_serverinstance_log_view: Retrieve global server log
     */
    b_serverinstance_log_view = 18,

    /**
     * b_serverinstance_log_add: Write to global server log
     */
    b_serverinstance_log_add = 19,

    /**
     * b_serverinstance_stop: Shutdown the server process
     */
    b_serverinstance_stop = 20,

    /**
     * b_serverinstance_modify_settings: Edit global settings
     */
    b_serverinstance_modify_settings = 21,

    /**
     * b_serverinstance_modify_querygroup: Edit global ServerQuery groups
     */
    b_serverinstance_modify_querygroup = 22,

    /**
     * b_serverinstance_modify_templates: Edit global template groups
     */
    b_serverinstance_modify_templates = 23,

    /**
     * b_virtualserver_select: Select a virtual server
     */
    b_virtualserver_select = 24,

    /**
     * b_virtualserver_info_view: Retrieve virtual server information
     */
    b_virtualserver_info_view = 25,

    /**
     * b_virtualserver_connectioninfo_view: Retrieve virtual server connection information
     */
    b_virtualserver_connectioninfo_view = 26,

    /**
     * b_virtualserver_channel_list: List channels on a virtual server
     */
    b_virtualserver_channel_list = 27,

    /**
     * b_virtualserver_channel_search: Search for channels on a virtual server
     */
    b_virtualserver_channel_search = 28,

    /**
     * b_virtualserver_client_list: List clients online on a virtual server
     */
    b_virtualserver_client_list = 29,

    /**
     * b_virtualserver_client_search: Search for clients online on a virtual server
     */
    b_virtualserver_client_search = 30,

    /**
     * b_virtualserver_client_dblist: List client identities known by the virtual server
     */
    b_virtualserver_client_dblist = 31,

    /**
     * b_virtualserver_client_dbsearch: Search for client identities known by the virtual server
     */
    b_virtualserver_client_dbsearch = 32,

    /**
     * b_virtualserver_client_dbinfo: Retrieve client information
     */
    b_virtualserver_client_dbinfo = 33,

    /**
     * b_virtualserver_permission_find: Find permissions
     */
    b_virtualserver_permission_find = 34,

    /**
     * b_virtualserver_custom_search: Find custom fields
     */
    b_virtualserver_custom_search = 35,

    /**
     * b_virtualserver_start: Start own virtual server
     */
    b_virtualserver_start = 36,

    /**
     * b_virtualserver_stop: Stop own virtual server
     */
    b_virtualserver_stop = 37,

    /**
     * b_virtualserver_token_list: List privilege keys available
     */
    b_virtualserver_token_list = 38,

    /**
     * b_virtualserver_token_add: Create new privilege keys
     */
    b_virtualserver_token_add = 39,

    /**
     * b_virtualserver_token_use: Use a privilege keys to gain access to groups
     */
    b_virtualserver_token_use = 40,

    /**
     * b_virtualserver_token_delete: Delete a privilege key
     */
    b_virtualserver_token_delete = 41,

    // ADD DOCS
    /**
     * b_virtualserver_apikey_add: TBD
     */
    b_virtualserver_apikey_add = 42,

    // ADD DOCS
    /**
     * b_virtualserver_apikey_manage: TBD
     */
    b_virtualserver_apikey_manage = 43,

    /**
     * b_virtualserver_log_view: Retrieve virtual server log
     */
    b_virtualserver_log_view = 44,

    /**
     * b_virtualserver_log_add: Write to virtual server log
     */
    b_virtualserver_log_add = 45,

    /**
     * b_virtualserver_join_ignore_password: Join virtual server ignoring its password
     */
    b_virtualserver_join_ignore_password = 46,

    /**
     * b_virtualserver_notify_register: Register for server notifications
     */
    b_virtualserver_notify_register = 47,

    /**
     * b_virtualserver_notify_unregister: Unregister from server notifications
     */
    b_virtualserver_notify_unregister = 48,

    /**
     * b_virtualserver_snapshot_create: Create server snapshots
     */
    b_virtualserver_snapshot_create = 49,

    /**
     * b_virtualserver_snapshot_deploy: Deploy server snapshots
     */
    b_virtualserver_snapshot_deploy = 50,

    /**
     * b_virtualserver_permission_reset: Reset the server permission settings to default values
     */
    b_virtualserver_permission_reset = 51,

    /**
     * b_virtualserver_modify_name: Modify server name
     */
    b_virtualserver_modify_name = 52,

    /**
     * b_virtualserver_modify_welcomemessage: Modify welcome message
     */
    b_virtualserver_modify_welcomemessage = 53,

    /**
     * b_virtualserver_modify_maxclients: Modify servers max clients
     */
    b_virtualserver_modify_maxclients = 54,

    /**
     * b_virtualserver_modify_reserved_slots: Modify reserved slots
     */
    b_virtualserver_modify_reserved_slots = 55,

    /**
     * b_virtualserver_modify_password: Modify server password
     */
    b_virtualserver_modify_password = 56,

    /**
     * b_virtualserver_modify_default_servergroup: Modify default Server Group
     */
    b_virtualserver_modify_default_servergroup = 57,

    /**
     * b_virtualserver_modify_default_channelgroup: Modify default Channel Group
     */
    b_virtualserver_modify_default_channelgroup = 58,

    /**
     * b_virtualserver_modify_default_channeladmingroup: Modify default Channel Admin Group
     */
    b_virtualserver_modify_default_channeladmingroup = 59,

    /**
     * b_virtualserver_modify_channel_forced_silence: Modify channel force silence value
     */
    b_virtualserver_modify_channel_forced_silence = 60,

    /**
     * b_virtualserver_modify_complain: Modify individual complain settings
     */
    b_virtualserver_modify_complain = 61,

    /**
     * b_virtualserver_modify_antiflood: Modify individual antiflood settings
     */
    b_virtualserver_modify_antiflood = 62,

    /**
     * b_virtualserver_modify_ft_settings: Modify file transfer settings
     */
    b_virtualserver_modify_ft_settings = 63,

    /**
     * b_virtualserver_modify_ft_quotas: Modify file transfer quotas
     */
    b_virtualserver_modify_ft_quotas = 64,

    /**
     * b_virtualserver_modify_hostmessage: Modify individual hostmessage settings
     */
    b_virtualserver_modify_hostmessage = 65,

    /**
     * b_virtualserver_modify_hostbanner: Modify individual hostbanner settings
     */
    b_virtualserver_modify_hostbanner = 66,

    /**
     * b_virtualserver_modify_hostbutton: Modify individual hostbutton settings
     */
    b_virtualserver_modify_hostbutton = 67,

    /**
     * b_virtualserver_modify_port: Modify server port
     */
    b_virtualserver_modify_port = 68,

    /**
     * b_virtualserver_modify_autostart: Modify server autostart
     */
    b_virtualserver_modify_autostart = 69,

    /**
     * b_virtualserver_modify_needed_identity_security_level: Modify required identity security level
     */
    b_virtualserver_modify_needed_identity_security_level = 70,

    /**
     * b_virtualserver_modify_priority_speaker_dimm_modificator: Modify priority speaker dimm modificator
     */
    b_virtualserver_modify_priority_speaker_dimm_modificator = 71,

    /**
     * b_virtualserver_modify_log_settings: Modify log settings
     */
    b_virtualserver_modify_log_settings = 72,

    /**
     * b_virtualserver_modify_min_client_version: Modify min client version
     */
    b_virtualserver_modify_min_client_version = 73,

    /**
     * b_virtualserver_modify_icon_id: Modify server icon
     */
    b_virtualserver_modify_icon_id = 74,

    /**
     * b_virtualserver_modify_weblist: Modify web server list reporting settings
     */
    b_virtualserver_modify_weblist = 75,

    /**
     * b_virtualserver_modify_codec_encryption_mode: Modify codec encryption mode
     */
    b_virtualserver_modify_codec_encryption_mode = 76,

    /**
     * b_virtualserver_modify_temporary_passwords: Modify temporary serverpasswords
     */
    b_virtualserver_modify_temporary_passwords = 77,

    /**
     * b_virtualserver_modify_temporary_passwords_own: Modify own temporary serverpasswords
     */
    b_virtualserver_modify_temporary_passwords_own = 78,

    /**
     * b_virtualserver_modify_channel_temp_delete_delay_default: Modify default temporary channel delete delay
     */
    b_virtualserver_modify_channel_temp_delete_delay_default = 79,

    // ADD DOCS
    /**
     * b_virtualserver_modify_nickname: TBD
     */
    b_virtualserver_modify_nickname = 80,

    // ADD DOCS
    /**
     * b_virtualserver_modify_integrations: TBD
     */
    b_virtualserver_modify_integrations = 81,

    /**
     * i_channel_min_depth: Min channel creation depth in hierarchy
     */
    i_channel_min_depth = 82,

    /**
     * i_channel_max_depth: Max channel creation depth in hierarchy
     */
    i_channel_max_depth = 83,

    /**
     * b_channel_group_inheritance_end: Stop inheritance of channel group permissions
     */
    b_channel_group_inheritance_end = 84,

    /**
     * i_channel_permission_modify_power: Modify channel permission power
     */
    i_channel_permission_modify_power = 85,

    /**
     * i_channel_needed_permission_modify_power: Needed modify channel permission power
     */
    i_channel_needed_permission_modify_power = 86,

    /**
     * b_channel_info_view: Retrieve channel information
     */
    b_channel_info_view = 87,

    /**
     * b_channel_create_child: Create sub-channels
     */
    b_channel_create_child = 88,

    /**
     * b_channel_create_permanent: Create permanent channels
     */
    b_channel_create_permanent = 89,

    /**
     * b_channel_create_semi_permanent: Create semi-permanent channels
     */
    b_channel_create_semi_permanent = 90,

    /**
     * b_channel_create_temporary: Create temporary channels
     */
    b_channel_create_temporary = 91,

    /**
     * b_channel_create_with_topic: Create channels with a topic
     */
    b_channel_create_with_topic = 92,

    /**
     * b_channel_create_with_description: Create channels with a description
     */
    b_channel_create_with_description = 93,

    /**
     * b_channel_create_with_password: Create password protected channels
     */
    b_channel_create_with_password = 94,

    // ADD DOCS
    /**
     * b_channel_create_with_banner: TBD
     */
    b_channel_create_with_banner = 95,

    /**
     * b_channel_create_modify_with_codec_opusvoice: Create channels using OPUS (voice) codec
     */
    b_channel_create_modify_with_codec_opusvoice = 96,

    /**
     * b_channel_create_modify_with_codec_opusmusic: Create channels using OPUS (music) codec
     */
    b_channel_create_modify_with_codec_opusmusic = 97,

    /**
     * i_channel_create_modify_with_codec_maxquality: Create channels with custom codec quality
     */
    i_channel_create_modify_with_codec_maxquality = 98,

    /**
     * i_channel_create_modify_with_codec_latency_factor_min: Create channels with minimal custom codec latency factor
     */
    i_channel_create_modify_with_codec_latency_factor_min = 99,

    /**
     * b_channel_create_with_maxclients: Create channels with custom max clients
     */
    b_channel_create_with_maxclients = 100,

    /**
     * b_channel_create_with_maxfamilyclients: Create channels with custom max family clients
     */
    b_channel_create_with_maxfamilyclients = 101,

    /**
     * b_channel_create_with_sortorder: Create channels with custom sort order
     */
    b_channel_create_with_sortorder = 102,

    /**
     * b_channel_create_with_default: Create default channels
     */
    b_channel_create_with_default = 103,

    /**
     * b_channel_create_with_needed_talk_power: Create channels with needed talk power
     */
    b_channel_create_with_needed_talk_power = 104,

    /**
     * b_channel_create_modify_with_force_password: Create new channels only with password
     */
    b_channel_create_modify_with_force_password = 105,

    /**
     * i_channel_create_modify_with_temp_delete_delay: Max delete delay for temporary channels
     */
    i_channel_create_modify_with_temp_delete_delay = 106,

    /**
     * b_channel_modify_parent: Move channels
     */
    b_channel_modify_parent = 107,

    /**
     * b_channel_modify_make_default: Make channel default
     */
    b_channel_modify_make_default = 108,

    /**
     * b_channel_modify_make_permanent: Make channel permanent
     */
    b_channel_modify_make_permanent = 109,

    /**
     * b_channel_modify_make_semi_permanent: Make channel semi-permanent
     */
    b_channel_modify_make_semi_permanent = 110,

    /**
     * b_channel_modify_make_temporary: Make channel temporary
     */
    b_channel_modify_make_temporary = 111,

    /**
     * b_channel_modify_name: Modify channel name
     */
    b_channel_modify_name = 112,

    /**
     * b_channel_modify_topic: Modify channel topic
     */
    b_channel_modify_topic = 113,

    /**
     * b_channel_modify_description: Modify channel description
     */
    b_channel_modify_description = 114,

    /**
     * b_channel_modify_password: Modify channel password
     */
    b_channel_modify_password = 115,

    // ADD DOCS
    /**
     * b_channel_modify_banner: TBD
     */
    b_channel_modify_banner = 116,

    /**
     * b_channel_modify_codec: Modify channel codec
     */
    b_channel_modify_codec = 117,

    /**
     * b_channel_modify_codec_quality: Modify channel codec quality
     */
    b_channel_modify_codec_quality = 118,

    /**
     * b_channel_modify_codec_latency_factor: Modify channel codec latency factor
     */
    b_channel_modify_codec_latency_factor = 119,

    /**
     * b_channel_modify_maxclients: Modify channels max clients
     */
    b_channel_modify_maxclients = 120,

    /**
     * b_channel_modify_maxfamilyclients: Modify channels max family clients
     */
    b_channel_modify_maxfamilyclients = 121,

    /**
     * b_channel_modify_sortorder: Modify channel sort order
     */
    b_channel_modify_sortorder = 122,

    /**
     * b_channel_modify_needed_talk_power: Change needed channel talk power
     */
    b_channel_modify_needed_talk_power = 123,

    /**
     * i_channel_modify_power: Channel modify power
     */
    i_channel_modify_power = 124,

    /**
     * i_channel_needed_modify_power: Needed channel modify power
     */
    i_channel_needed_modify_power = 125,

    /**
     * b_channel_modify_make_codec_encrypted: Make channel codec encrypted
     */
    b_channel_modify_make_codec_encrypted = 126,

    /**
     * b_channel_modify_temp_delete_delay: Modify temporary channel delete delay
     */
    b_channel_modify_temp_delete_delay = 127,

    /**
     * b_channel_delete_permanent: Delete permanent channels
     */
    b_channel_delete_permanent = 128,

    /**
     * b_channel_delete_semi_permanent: Delete semi-permanent channels
     */
    b_channel_delete_semi_permanent = 129,

    /**
     * b_channel_delete_temporary: Delete temporary channels
     */
    b_channel_delete_temporary = 130,

    /**
     * b_channel_delete_flag_force: Force channel delete
     */
    b_channel_delete_flag_force = 131,

    /**
     * i_channel_delete_power: Delete channel power
     */
    i_channel_delete_power = 132,

    /**
     * i_channel_needed_delete_power: Needed delete channel power
     */
    i_channel_needed_delete_power = 133,

    /**
     * b_channel_join_permanent: Join permanent channels
     */
    b_channel_join_permanent = 134,

    /**
     * b_channel_join_semi_permanent: Join semi-permanent channels
     */
    b_channel_join_semi_permanent = 135,

    /**
     * b_channel_join_temporary: Join temporary channels
     */
    b_channel_join_temporary = 136,

    /**
     * b_channel_join_ignore_password: Join channel ignoring its password
     */
    b_channel_join_ignore_password = 137,

    /**
     * b_channel_join_ignore_maxclients: Ignore channels max clients limit
     */
    b_channel_join_ignore_maxclients = 138,

    /**
     * i_channel_join_power: Channel join power
     */
    i_channel_join_power = 139,

    /**
     * i_channel_needed_join_power: Needed channel join power
     */
    i_channel_needed_join_power = 140,

    /**
     * i_channel_subscribe_power: Channel subscribe power
     */
    i_channel_subscribe_power = 141,

    /**
     * i_channel_needed_subscribe_power: Needed channel subscribe power
     */
    i_channel_needed_subscribe_power = 142,

    /**
     * i_channel_description_view_power: Channel description view power
     */
    i_channel_description_view_power = 143,

    /**
     * i_channel_needed_description_view_power: Needed channel needed description view power
     */
    i_channel_needed_description_view_power = 144,

    /**
     * i_icon_id: Group icon identifier
     */
    i_icon_id = 145,

    /**
     * i_max_icon_filesize: Max icon filesize in bytes
     */
    i_max_icon_filesize = 146,

    /**
     * b_icon_manage: Enables icon management
     */
    b_icon_manage = 147,

    /**
     * b_group_is_permanent: Group is permanent
     */
    b_group_is_permanent = 148,

    /**
     * i_group_auto_update_type: Group auto-update type
     */
    i_group_auto_update_type = 149,

    /**
     * i_group_auto_update_max_value: Group auto-update max value
     */
    i_group_auto_update_max_value = 150,

    /**
     * i_group_sort_id: Group sort id
     */
    i_group_sort_id = 151,

    /**
     * i_group_show_name_in_tree: Show group name in tree depending on selected mode
     */
    i_group_show_name_in_tree = 152,

    /**
     * b_virtualserver_servergroup_list: List server groups
     */
    b_virtualserver_servergroup_list = 153,

    /**
     * b_virtualserver_servergroup_permission_list: List server group permissions
     */
    b_virtualserver_servergroup_permission_list = 154,

    /**
     * b_virtualserver_servergroup_client_list: List clients from a server group
     */
    b_virtualserver_servergroup_client_list = 155,

    /**
     * b_virtualserver_channelgroup_list: List channel groups
     */
    b_virtualserver_channelgroup_list = 156,

    /**
     * b_virtualserver_channelgroup_permission_list: List channel group permissions
     */
    b_virtualserver_channelgroup_permission_list = 157,

    /**
     * b_virtualserver_channelgroup_client_list: List clients from a channel group
     */
    b_virtualserver_channelgroup_client_list = 158,

    /**
     * b_virtualserver_client_permission_list: List client permissions
     */
    b_virtualserver_client_permission_list = 159,

    /**
     * b_virtualserver_channel_permission_list: List channel permissions
     */
    b_virtualserver_channel_permission_list = 160,

    /**
     * b_virtualserver_channelclient_permission_list: List channel client permissions
     */
    b_virtualserver_channelclient_permission_list = 161,

    /**
     * b_virtualserver_servergroup_create: Create server groups
     */
    b_virtualserver_servergroup_create = 162,

    /**
     * b_virtualserver_channelgroup_create: Create channel groups
     */
    b_virtualserver_channelgroup_create = 163,

    /**
     * i_group_modify_power: Group modify power
     */
    i_group_modify_power = 164,

    /**
     * i_group_needed_modify_power: Needed group modify power
     */
    i_group_needed_modify_power = 165,

    /**
     * i_group_member_add_power: Group member add power
     */
    i_group_member_add_power = 166,

    /**
     * i_group_needed_member_add_power: Needed group member add power
     */
    i_group_needed_member_add_power = 167,

    /**
     * i_group_member_remove_power: Group member delete power
     */
    i_group_member_remove_power = 168,

    /**
     * i_group_needed_member_remove_power: Needed group member delete power
     */
    i_group_needed_member_remove_power = 169,

    /**
     * i_permission_modify_power: Permission modify power
     */
    i_permission_modify_power = 170,

    /**
     * b_permission_modify_power_ignore: Ignore needed permission modify power
     */
    b_permission_modify_power_ignore = 171,

    /**
     * b_virtualserver_servergroup_delete: Delete server groups
     */
    b_virtualserver_servergroup_delete = 172,

    /**
     * b_virtualserver_channelgroup_delete: Delete channel groups
     */
    b_virtualserver_channelgroup_delete = 173,

    /**
     * i_client_permission_modify_power: Client permission modify power
     */
    i_client_permission_modify_power = 174,

    /**
     * i_client_needed_permission_modify_power: Needed client permission modify power
     */
    i_client_needed_permission_modify_power = 175,

    /**
     * i_client_max_clones_uid: Max additional connections per client identity
     */
    i_client_max_clones_uid = 176,

    /**
     * i_client_max_idletime: Max idle time in seconds
     */
    i_client_max_idletime = 177,

    /**
     * i_client_max_avatar_filesize: Max avatar filesize in bytes
     */
    i_client_max_avatar_filesize = 178,

    /**
     * i_client_max_channel_subscriptions: Max channel subscriptions
     */
    i_client_max_channel_subscriptions = 179,

    /**
     * b_client_is_priority_speaker: Client is priority speaker
     */
    b_client_is_priority_speaker = 180,

    /**
     * b_client_skip_channelgroup_permissions: Ignore channel group permissions
     */
    b_client_skip_channelgroup_permissions = 181,

    /**
     * b_client_force_push_to_talk: Force Push-To-Talk capture mode
     */
    b_client_force_push_to_talk = 182,

    /**
     * b_client_ignore_bans: Ignore bans
     */
    b_client_ignore_bans = 183,

    /**
     * b_client_ignore_antiflood: Ignore antiflood measurements
     */
    b_client_ignore_antiflood = 184,

    /**
     * b_client_use_reserved_slot: Use an reserved slot
     */
    b_client_use_reserved_slot = 185,

    /**
     * b_client_use_channel_commander: Use channel commander
     */
    b_client_use_channel_commander = 186,

    /**
     * b_client_request_talker: Allow to request talk power
     */
    b_client_request_talker = 187,

    /**
     * b_client_avatar_delete_other: Allow deletion of avatars from other clients
     */
    b_client_avatar_delete_other = 188,

    /**
     * b_client_is_sticky: Client will be sticked to current channel
     */
    b_client_is_sticky = 189,

    /**
     * b_client_ignore_sticky: Client ignores sticky flag
     */
    b_client_ignore_sticky = 190,

    /**
     * b_client_info_view: Retrieve client information
     */
    b_client_info_view = 191,

    /**
     * b_client_permissionoverview_view: Retrieve client permissions overview
     */
    b_client_permissionoverview_view = 192,

    /**
     * b_client_permissionoverview_own: Retrieve clients own permissions overview
     */
    b_client_permissionoverview_own = 193,

    /**
     * b_client_remoteaddress_view: View client IP address and port
     */
    b_client_remoteaddress_view = 194,

    /**
     * i_client_serverquery_view_power: ServerQuery view power
     */
    i_client_serverquery_view_power = 195,

    /**
     * i_client_needed_serverquery_view_power: Needed ServerQuery view power
     */
    i_client_needed_serverquery_view_power = 196,

    /**
     * b_client_custom_info_view: View custom fields
     */
    b_client_custom_info_view = 197,

    /**
     * i_client_kick_from_server_power: Client kick power from server
     */
    i_client_kick_from_server_power = 198,

    /**
     * i_client_needed_kick_from_server_power: Needed client kick power from server
     */
    i_client_needed_kick_from_server_power = 199,

    /**
     * i_client_kick_from_channel_power: Client kick power from channel
     */
    i_client_kick_from_channel_power = 200,

    /**
     * i_client_needed_kick_from_channel_power: Needed client kick power from channel
     */
    i_client_needed_kick_from_channel_power = 201,

    /**
     * i_client_ban_power: Client ban power
     */
    i_client_ban_power = 202,

    /**
     * i_client_needed_ban_power: Needed client ban power
     */
    i_client_needed_ban_power = 203,

    /**
     * i_client_move_power: Client move power
     */
    i_client_move_power = 204,

    /**
     * i_client_needed_move_power: Needed client move power
     */
    i_client_needed_move_power = 205,

    /**
     * i_client_complain_power: Complain power
     */
    i_client_complain_power = 206,

    /**
     * i_client_needed_complain_power: Needed complain power
     */
    i_client_needed_complain_power = 207,

    /**
     * b_client_complain_list: Show complain list
     */
    b_client_complain_list = 208,

    /**
     * b_client_complain_delete_own: Delete own complains
     */
    b_client_complain_delete_own = 209,

    /**
     * b_client_complain_delete: Delete complains
     */
    b_client_complain_delete = 210,

    /**
     * b_client_ban_list: Show banlist
     */
    b_client_ban_list = 211,

    /**
     * b_client_ban_create: Add a ban
     */
    b_client_ban_create = 212,

    /**
     * b_client_ban_delete_own: Delete own bans
     */
    b_client_ban_delete_own = 213,

    /**
     * b_client_ban_delete: Delete bans
     */
    b_client_ban_delete = 214,

    /**
     * i_client_ban_max_bantime: Max bantime
     */
    i_client_ban_max_bantime = 215,

    /**
     * i_client_private_textmessage_power: Client private message power
     */
    i_client_private_textmessage_power = 216,

    /**
     * i_client_needed_private_textmessage_power: Needed client private message power
     */
    i_client_needed_private_textmessage_power = 217,

    /**
     * b_client_server_textmessage_send: Send text messages to virtual server
     */
    b_client_server_textmessage_send = 218,

    /**
     * b_client_channel_textmessage_send: Send text messages to channel
     */
    b_client_channel_textmessage_send = 219,

    /**
     * b_client_offline_textmessage_send: Send offline messages to clients
     */
    b_client_offline_textmessage_send = 220,

    /**
     * i_client_talk_power: Client talk power
     */
    i_client_talk_power = 221,

    /**
     * i_client_needed_talk_power: Needed client talk power
     */
    i_client_needed_talk_power = 222,

    /**
     * i_client_poke_power: Client poke power
     */
    i_client_poke_power = 223,

    /**
     * i_client_needed_poke_power: Needed client poke power
     */
    i_client_needed_poke_power = 224,

    /**
     * b_client_set_flag_talker: Set the talker flag for clients and allow them to speak
     */
    b_client_set_flag_talker = 225,

    /**
     * i_client_whisper_power: Client whisper power
     */
    i_client_whisper_power = 226,

    /**
     * i_client_needed_whisper_power: Client needed whisper power
     */
    i_client_needed_whisper_power = 227,

    /**
     * b_client_modify_description: Edit a clients description
     */
    b_client_modify_description = 228,

    /**
     * b_client_modify_own_description: Allow client to edit own description
     */
    b_client_modify_own_description = 229,

    /**
     * b_client_modify_dbproperties: Edit a clients properties in the database
     */
    b_client_modify_dbproperties = 230,

    /**
     * b_client_delete_dbproperties: Delete a clients properties in the database
     */
    b_client_delete_dbproperties = 231,

    /**
     * b_client_create_modify_serverquery_login: Create or modify own ServerQuery account
     */
    b_client_create_modify_serverquery_login = 232,

    /**
     * b_ft_ignore_password: Browse files without channel password
     */
    b_ft_ignore_password = 233,

    /**
     * b_ft_transfer_list: Retrieve list of running filetransfers
     */
    b_ft_transfer_list = 234,

    /**
     * i_ft_file_upload_power: File upload power
     */
    i_ft_file_upload_power = 235,

    /**
     * i_ft_needed_file_upload_power: Needed file upload power
     */
    i_ft_needed_file_upload_power = 236,

    /**
     * i_ft_file_download_power: File download power
     */
    i_ft_file_download_power = 237,

    /**
     * i_ft_needed_file_download_power: Needed file download power
     */
    i_ft_needed_file_download_power = 238,

    /**
     * i_ft_file_delete_power: File delete power
     */
    i_ft_file_delete_power = 239,

    /**
     * i_ft_needed_file_delete_power: Needed file delete power
     */
    i_ft_needed_file_delete_power = 240,

    /**
     * i_ft_file_rename_power: File rename power
     */
    i_ft_file_rename_power = 241,

    /**
     * i_ft_needed_file_rename_power: Needed file rename power
     */
    i_ft_needed_file_rename_power = 242,

    /**
     * i_ft_file_browse_power: File browse power
     */
    i_ft_file_browse_power = 243,

    /**
     * i_ft_needed_file_browse_power: Needed file browse power
     */
    i_ft_needed_file_browse_power = 244,

    /**
     * i_ft_directory_create_power: Create directory power
     */
    i_ft_directory_create_power = 245,

    /**
     * i_ft_needed_directory_create_power: Needed create directory power
     */
    i_ft_needed_directory_create_power = 246,

    /**
     * i_ft_quota_mb_download_per_client: Download quota per client in MByte
     */
    i_ft_quota_mb_download_per_client = 247,

    /**
     * i_ft_quota_mb_upload_per_client: Upload quota per client in MByte
     */
    i_ft_quota_mb_upload_per_client = 248,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_info_view: TBD
     */
    i_needed_modify_power_virtualserver_info_view = 32793,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_connectioninfo_view: TBD
     */
    i_needed_modify_power_virtualserver_connectioninfo_view = 32794,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channel_list: TBD
     */
    i_needed_modify_power_virtualserver_channel_list = 32795,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channel_search: TBD
     */
    i_needed_modify_power_virtualserver_channel_search = 32796,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_client_list: TBD
     */
    i_needed_modify_power_virtualserver_client_list = 32797,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_client_search: TBD
     */
    i_needed_modify_power_virtualserver_client_search = 32798,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_client_dblist: TBD
     */
    i_needed_modify_power_virtualserver_client_dblist = 32799,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_client_dbsearch: TBD
     */
    i_needed_modify_power_virtualserver_client_dbsearch = 32800,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_client_dbinfo: TBD
     */
    i_needed_modify_power_virtualserver_client_dbinfo = 32801,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_permission_find: TBD
     */
    i_needed_modify_power_virtualserver_permission_find = 32802,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_custom_search: TBD
     */
    i_needed_modify_power_virtualserver_custom_search = 32803,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_start: TBD
     */
    i_needed_modify_power_virtualserver_start = 32804,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_stop: TBD
     */
    i_needed_modify_power_virtualserver_stop = 32805,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_token_list: TBD
     */
    i_needed_modify_power_virtualserver_token_list = 32806,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_token_add: TBD
     */
    i_needed_modify_power_virtualserver_token_add = 32807,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_token_use: TBD
     */
    i_needed_modify_power_virtualserver_token_use = 32808,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_token_delete: TBD
     */
    i_needed_modify_power_virtualserver_token_delete = 32809,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_apikey_add: TBD
     */
    i_needed_modify_power_virtualserver_apikey_add = 32810,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_apikey_manage: TBD
     */
    i_needed_modify_power_virtualserver_apikey_manage = 32811,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_log_view: TBD
     */
    i_needed_modify_power_virtualserver_log_view = 32812,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_log_add: TBD
     */
    i_needed_modify_power_virtualserver_log_add = 32813,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_join_ignore_password: TBD
     */
    i_needed_modify_power_virtualserver_join_ignore_password = 32814,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_notify_register: TBD
     */
    i_needed_modify_power_virtualserver_notify_register = 32815,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_notify_unregister: TBD
     */
    i_needed_modify_power_virtualserver_notify_unregister = 32816,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_name: TBD
     */
    i_needed_modify_power_virtualserver_modify_name = 32820,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_welcomemessage: TBD
     */
    i_needed_modify_power_virtualserver_modify_welcomemessage = 32821,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_maxclients: TBD
     */
    i_needed_modify_power_virtualserver_modify_maxclients = 32822,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_reserved_slots: TBD
     */
    i_needed_modify_power_virtualserver_modify_reserved_slots = 32823,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_password: TBD
     */
    i_needed_modify_power_virtualserver_modify_password = 32824,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_default_servergroup: TBD
     */
    i_needed_modify_power_virtualserver_modify_default_servergroup = 32825,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_default_channelgroup: TBD
     */
    i_needed_modify_power_virtualserver_modify_default_channelgroup = 32826,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_default_channeladmingroup: TBD
     */
    i_needed_modify_power_virtualserver_modify_default_channeladmingroup = 32827,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_channel_forced_silence: TBD
     */
    i_needed_modify_power_virtualserver_modify_channel_forced_silence = 32828,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_complain: TBD
     */
    i_needed_modify_power_virtualserver_modify_complain = 32829,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_antiflood: TBD
     */
    i_needed_modify_power_virtualserver_modify_antiflood = 32830,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_ft_settings: TBD
     */
    i_needed_modify_power_virtualserver_modify_ft_settings = 32831,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_ft_quotas: TBD
     */
    i_needed_modify_power_virtualserver_modify_ft_quotas = 32832,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_hostmessage: TBD
     */
    i_needed_modify_power_virtualserver_modify_hostmessage = 32833,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_hostbanner: TBD
     */
    i_needed_modify_power_virtualserver_modify_hostbanner = 32834,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_hostbutton: TBD
     */
    i_needed_modify_power_virtualserver_modify_hostbutton = 32835,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_port: TBD
     */
    i_needed_modify_power_virtualserver_modify_port = 32836,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_autostart: TBD
     */
    i_needed_modify_power_virtualserver_modify_autostart = 32837,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_needed_identity_security_level: TBD
     */
    i_needed_modify_power_virtualserver_modify_needed_identity_security_level = 32838,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_priority_speaker_dimm_modificator: TBD
     */
    i_needed_modify_power_virtualserver_modify_priority_speaker_dimm_modificator = 32839,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_log_settings: TBD
     */
    i_needed_modify_power_virtualserver_modify_log_settings = 32840,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_min_client_version: TBD
     */
    i_needed_modify_power_virtualserver_modify_min_client_version = 32841,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_icon_id: TBD
     */
    i_needed_modify_power_virtualserver_modify_icon_id = 32842,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_weblist: TBD
     */
    i_needed_modify_power_virtualserver_modify_weblist = 32843,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_codec_encryption_mode: TBD
     */
    i_needed_modify_power_virtualserver_modify_codec_encryption_mode = 32844,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_temporary_passwords: TBD
     */
    i_needed_modify_power_virtualserver_modify_temporary_passwords = 32845,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_temporary_passwords_own: TBD
     */
    i_needed_modify_power_virtualserver_modify_temporary_passwords_own = 32846,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_channel_temp_delete_delay_default: TBD
     */
    i_needed_modify_power_virtualserver_modify_channel_temp_delete_delay_default = 32847,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_nickname: TBD
     */
    i_needed_modify_power_virtualserver_modify_nickname = 32848,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_modify_integrations: TBD
     */
    i_needed_modify_power_virtualserver_modify_integrations = 32849,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_min_depth: TBD
     */
    i_needed_modify_power_channel_min_depth = 32850,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_max_depth: TBD
     */
    i_needed_modify_power_channel_max_depth = 32851,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_group_inheritance_end: TBD
     */
    i_needed_modify_power_channel_group_inheritance_end = 32852,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_permission_modify_power: TBD
     */
    i_needed_modify_power_channel_permission_modify_power = 32853,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_needed_permission_modify_power: TBD
     */
    i_needed_modify_power_channel_needed_permission_modify_power = 32854,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_info_view: TBD
     */
    i_needed_modify_power_channel_info_view = 32855,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_child: TBD
     */
    i_needed_modify_power_channel_create_child = 32856,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_permanent: TBD
     */
    i_needed_modify_power_channel_create_permanent = 32857,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_semi_permanent: TBD
     */
    i_needed_modify_power_channel_create_semi_permanent = 32858,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_temporary: TBD
     */
    i_needed_modify_power_channel_create_temporary = 32859,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_topic: TBD
     */
    i_needed_modify_power_channel_create_with_topic = 32860,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_description: TBD
     */
    i_needed_modify_power_channel_create_with_description = 32861,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_password: TBD
     */
    i_needed_modify_power_channel_create_with_password = 32862,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_banner: TBD
     */
    i_needed_modify_power_channel_create_with_banner = 32863,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_modify_with_codec_opusvoice: TBD
     */
    i_needed_modify_power_channel_create_modify_with_codec_opusvoice = 32864,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_modify_with_codec_opusmusic: TBD
     */
    i_needed_modify_power_channel_create_modify_with_codec_opusmusic = 32865,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_modify_with_codec_maxquality: TBD
     */
    i_needed_modify_power_channel_create_modify_with_codec_maxquality = 32866,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_modify_with_codec_latency_factor_min: TBD
     */
    i_needed_modify_power_channel_create_modify_with_codec_latency_factor_min = 32867,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_maxclients: TBD
     */
    i_needed_modify_power_channel_create_with_maxclients = 32868,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_maxfamilyclients: TBD
     */
    i_needed_modify_power_channel_create_with_maxfamilyclients = 32869,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_sortorder: TBD
     */
    i_needed_modify_power_channel_create_with_sortorder = 32870,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_default: TBD
     */
    i_needed_modify_power_channel_create_with_default = 32871,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_with_needed_talk_power: TBD
     */
    i_needed_modify_power_channel_create_with_needed_talk_power = 32872,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_modify_with_force_password: TBD
     */
    i_needed_modify_power_channel_create_modify_with_force_password = 32873,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_create_modify_with_temp_delete_delay: TBD
     */
    i_needed_modify_power_channel_create_modify_with_temp_delete_delay = 32874,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_parent: TBD
     */
    i_needed_modify_power_channel_modify_parent = 32875,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_make_default: TBD
     */
    i_needed_modify_power_channel_modify_make_default = 32876,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_make_permanent: TBD
     */
    i_needed_modify_power_channel_modify_make_permanent = 32877,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_make_semi_permanent: TBD
     */
    i_needed_modify_power_channel_modify_make_semi_permanent = 32878,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_make_temporary: TBD
     */
    i_needed_modify_power_channel_modify_make_temporary = 32879,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_name: TBD
     */
    i_needed_modify_power_channel_modify_name = 32880,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_topic: TBD
     */
    i_needed_modify_power_channel_modify_topic = 32881,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_description: TBD
     */
    i_needed_modify_power_channel_modify_description = 32882,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_password: TBD
     */
    i_needed_modify_power_channel_modify_password = 32883,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_banner: TBD
     */
    i_needed_modify_power_channel_modify_banner = 32884,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_codec: TBD
     */
    i_needed_modify_power_channel_modify_codec = 32885,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_codec_quality: TBD
     */
    i_needed_modify_power_channel_modify_codec_quality = 32886,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_codec_latency_factor: TBD
     */
    i_needed_modify_power_channel_modify_codec_latency_factor = 32887,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_maxclients: TBD
     */
    i_needed_modify_power_channel_modify_maxclients = 32888,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_maxfamilyclients: TBD
     */
    i_needed_modify_power_channel_modify_maxfamilyclients = 32889,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_sortorder: TBD
     */
    i_needed_modify_power_channel_modify_sortorder = 32890,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_needed_talk_power: TBD
     */
    i_needed_modify_power_channel_modify_needed_talk_power = 32891,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_power: TBD
     */
    i_needed_modify_power_channel_modify_power = 32892,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_needed_modify_power: TBD
     */
    i_needed_modify_power_channel_needed_modify_power = 32893,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_make_codec_encrypted: TBD
     */
    i_needed_modify_power_channel_modify_make_codec_encrypted = 32894,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_modify_temp_delete_delay: TBD
     */
    i_needed_modify_power_channel_modify_temp_delete_delay = 32895,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_delete_permanent: TBD
     */
    i_needed_modify_power_channel_delete_permanent = 32896,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_delete_semi_permanent: TBD
     */
    i_needed_modify_power_channel_delete_semi_permanent = 32897,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_delete_temporary: TBD
     */
    i_needed_modify_power_channel_delete_temporary = 32898,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_delete_flag_force: TBD
     */
    i_needed_modify_power_channel_delete_flag_force = 32899,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_delete_power: TBD
     */
    i_needed_modify_power_channel_delete_power = 32900,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_needed_delete_power: TBD
     */
    i_needed_modify_power_channel_needed_delete_power = 32901,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_join_permanent: TBD
     */
    i_needed_modify_power_channel_join_permanent = 32902,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_join_semi_permanent: TBD
     */
    i_needed_modify_power_channel_join_semi_permanent = 32903,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_join_temporary: TBD
     */
    i_needed_modify_power_channel_join_temporary = 32904,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_join_ignore_password: TBD
     */
    i_needed_modify_power_channel_join_ignore_password = 32905,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_join_ignore_maxclients: TBD
     */
    i_needed_modify_power_channel_join_ignore_maxclients = 32906,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_join_power: TBD
     */
    i_needed_modify_power_channel_join_power = 32907,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_needed_join_power: TBD
     */
    i_needed_modify_power_channel_needed_join_power = 32908,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_subscribe_power: TBD
     */
    i_needed_modify_power_channel_subscribe_power = 32909,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_needed_subscribe_power: TBD
     */
    i_needed_modify_power_channel_needed_subscribe_power = 32910,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_description_view_power: TBD
     */
    i_needed_modify_power_channel_description_view_power = 32911,

    // ADD DOCS
    /**
     * i_needed_modify_power_channel_needed_description_view_power: TBD
     */
    i_needed_modify_power_channel_needed_description_view_power = 32912,

    // ADD DOCS
    /**
     * i_needed_modify_power_icon_id: TBD
     */
    i_needed_modify_power_icon_id = 32913,

    // ADD DOCS
    /**
     * i_needed_modify_power_max_icon_filesize: TBD
     */
    i_needed_modify_power_max_icon_filesize = 32914,

    // ADD DOCS
    /**
     * i_needed_modify_power_icon_manage: TBD
     */
    i_needed_modify_power_icon_manage = 32915,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_is_permanent: TBD
     */
    i_needed_modify_power_group_is_permanent = 32916,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_auto_update_type: TBD
     */
    i_needed_modify_power_group_auto_update_type = 32917,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_sort_id: TBD
     */
    i_needed_modify_power_group_sort_id = 32919,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_show_name_in_tree: TBD
     */
    i_needed_modify_power_group_show_name_in_tree = 32920,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_servergroup_list: TBD
     */
    i_needed_modify_power_virtualserver_servergroup_list = 32921,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_servergroup_permission_list: TBD
     */
    i_needed_modify_power_virtualserver_servergroup_permission_list = 32922,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_servergroup_client_list: TBD
     */
    i_needed_modify_power_virtualserver_servergroup_client_list = 32923,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channelgroup_list: TBD
     */
    i_needed_modify_power_virtualserver_channelgroup_list = 32924,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channelgroup_permission_list: TBD
     */
    i_needed_modify_power_virtualserver_channelgroup_permission_list = 32925,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channelgroup_client_list: TBD
     */
    i_needed_modify_power_virtualserver_channelgroup_client_list = 32926,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_client_permission_list: TBD
     */
    i_needed_modify_power_virtualserver_client_permission_list = 32927,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channel_permission_list: TBD
     */
    i_needed_modify_power_virtualserver_channel_permission_list = 32928,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channelclient_permission_list: TBD
     */
    i_needed_modify_power_virtualserver_channelclient_permission_list = 32929,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_servergroup_create: TBD
     */
    i_needed_modify_power_virtualserver_servergroup_create = 32930,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channelgroup_create: TBD
     */
    i_needed_modify_power_virtualserver_channelgroup_create = 32931,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_modify_power: TBD
     */
    i_needed_modify_power_group_modify_power = 32932,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_needed_modify_power: TBD
     */
    i_needed_modify_power_group_needed_modify_power = 32933,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_member_add_power: TBD
     */
    i_needed_modify_power_group_member_add_power = 32934,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_needed_member_add_power: TBD
     */
    i_needed_modify_power_group_needed_member_add_power = 32935,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_member_remove_power: TBD
     */
    i_needed_modify_power_group_member_remove_power = 32936,

    // ADD DOCS
    /**
     * i_needed_modify_power_group_needed_member_remove_power: TBD
     */
    i_needed_modify_power_group_needed_member_remove_power = 32937,

    // ADD DOCS
    /**
     * i_needed_modify_power_permission_modify_power: TBD
     */
    i_needed_modify_power_permission_modify_power = 32938,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_servergroup_delete: TBD
     */
    i_needed_modify_power_virtualserver_servergroup_delete = 32940,

    // ADD DOCS
    /**
     * i_needed_modify_power_virtualserver_channelgroup_delete: TBD
     */
    i_needed_modify_power_virtualserver_channelgroup_delete = 32941,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_permission_modify_power: TBD
     */
    i_needed_modify_power_client_permission_modify_power = 32942,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_permission_modify_power: TBD
     */
    i_needed_modify_power_client_needed_permission_modify_power = 32943,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_max_clones_uid: TBD
     */
    i_needed_modify_power_client_max_clones_uid = 32944,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_max_idletime: TBD
     */
    i_needed_modify_power_client_max_idletime = 32945,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_max_avatar_filesize: TBD
     */
    i_needed_modify_power_client_max_avatar_filesize = 32946,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_max_channel_subscriptions: TBD
     */
    i_needed_modify_power_client_max_channel_subscriptions = 32947,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_is_priority_speaker: TBD
     */
    i_needed_modify_power_client_is_priority_speaker = 32948,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_skip_channelgroup_permissions: TBD
     */
    i_needed_modify_power_client_skip_channelgroup_permissions = 32949,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_force_push_to_talk: TBD
     */
    i_needed_modify_power_client_force_push_to_talk = 32950,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ignore_bans: TBD
     */
    i_needed_modify_power_client_ignore_bans = 32951,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ignore_antiflood: TBD
     */
    i_needed_modify_power_client_ignore_antiflood = 32952,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_use_reserved_slot: TBD
     */
    i_needed_modify_power_client_use_reserved_slot = 32953,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_use_channel_commander: TBD
     */
    i_needed_modify_power_client_use_channel_commander = 32954,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_request_talker: TBD
     */
    i_needed_modify_power_client_request_talker = 32955,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_avatar_delete_other: TBD
     */
    i_needed_modify_power_client_avatar_delete_other = 32956,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_is_sticky: TBD
     */
    i_needed_modify_power_client_is_sticky = 32957,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ignore_sticky: TBD
     */
    i_needed_modify_power_client_ignore_sticky = 32958,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_info_view: TBD
     */
    i_needed_modify_power_client_info_view = 32959,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_permissionoverview_view: TBD
     */
    i_needed_modify_power_client_permissionoverview_view = 32960,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_permissionoverview_own: TBD
     */
    i_needed_modify_power_client_permissionoverview_own = 32961,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_remoteaddress_view: TBD
     */
    i_needed_modify_power_client_remoteaddress_view = 32962,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_serverquery_view_power: TBD
     */
    i_needed_modify_power_client_serverquery_view_power = 32963,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_serverquery_view_power: TBD
     */
    i_needed_modify_power_client_needed_serverquery_view_power = 32964,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_custom_info_view: TBD
     */
    i_needed_modify_power_client_custom_info_view = 32965,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_kick_from_server_power: TBD
     */
    i_needed_modify_power_client_kick_from_server_power = 32966,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_kick_from_server_power: TBD
     */
    i_needed_modify_power_client_needed_kick_from_server_power = 32967,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_kick_from_channel_power: TBD
     */
    i_needed_modify_power_client_kick_from_channel_power = 32968,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_kick_from_channel_power: TBD
     */
    i_needed_modify_power_client_needed_kick_from_channel_power = 32969,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ban_power: TBD
     */
    i_needed_modify_power_client_ban_power = 32970,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_ban_power: TBD
     */
    i_needed_modify_power_client_needed_ban_power = 32971,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_move_power: TBD
     */
    i_needed_modify_power_client_move_power = 32972,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_move_power: TBD
     */
    i_needed_modify_power_client_needed_move_power = 32973,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_complain_power: TBD
     */
    i_needed_modify_power_client_complain_power = 32974,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_complain_power: TBD
     */
    i_needed_modify_power_client_needed_complain_power = 32975,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_complain_list: TBD
     */
    i_needed_modify_power_client_complain_list = 32976,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_complain_delete_own: TBD
     */
    i_needed_modify_power_client_complain_delete_own = 32977,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_complain_delete: TBD
     */
    i_needed_modify_power_client_complain_delete = 32978,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ban_list: TBD
     */
    i_needed_modify_power_client_ban_list = 32979,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ban_create: TBD
     */
    i_needed_modify_power_client_ban_create = 32980,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ban_delete_own: TBD
     */
    i_needed_modify_power_client_ban_delete_own = 32981,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ban_delete: TBD
     */
    i_needed_modify_power_client_ban_delete = 32982,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_ban_max_bantime: TBD
     */
    i_needed_modify_power_client_ban_max_bantime = 32983,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_private_textmessage_power: TBD
     */
    i_needed_modify_power_client_private_textmessage_power = 32984,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_private_textmessage_power: TBD
     */
    i_needed_modify_power_client_needed_private_textmessage_power = 32985,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_server_textmessage_send: TBD
     */
    i_needed_modify_power_client_server_textmessage_send = 32986,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_channel_textmessage_send: TBD
     */
    i_needed_modify_power_client_channel_textmessage_send = 32987,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_offline_textmessage_send: TBD
     */
    i_needed_modify_power_client_offline_textmessage_send = 32988,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_talk_power: TBD
     */
    i_needed_modify_power_client_talk_power = 32989,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_talk_power: TBD
     */
    i_needed_modify_power_client_needed_talk_power = 32990,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_poke_power: TBD
     */
    i_needed_modify_power_client_poke_power = 32991,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_poke_power: TBD
     */
    i_needed_modify_power_client_needed_poke_power = 32992,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_set_flag_talker: TBD
     */
    i_needed_modify_power_client_set_flag_talker = 32993,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_whisper_power: TBD
     */
    i_needed_modify_power_client_whisper_power = 32994,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_needed_whisper_power: TBD
     */
    i_needed_modify_power_client_needed_whisper_power = 32995,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_modify_description: TBD
     */
    i_needed_modify_power_client_modify_description = 32996,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_modify_own_description: TBD
     */
    i_needed_modify_power_client_modify_own_description = 32997,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_modify_dbproperties: TBD
     */
    i_needed_modify_power_client_modify_dbproperties = 32998,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_delete_dbproperties: TBD
     */
    i_needed_modify_power_client_delete_dbproperties = 32999,

    // ADD DOCS
    /**
     * i_needed_modify_power_client_create_modify_serverquery_login: TBD
     */
    i_needed_modify_power_client_create_modify_serverquery_login = 33000,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_ignore_password: TBD
     */
    i_needed_modify_power_ft_ignore_password = 33001,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_transfer_list: TBD
     */
    i_needed_modify_power_ft_transfer_list = 33002,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_file_upload_power: TBD
     */
    i_needed_modify_power_ft_file_upload_power = 33003,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_needed_file_upload_power: TBD
     */
    i_needed_modify_power_ft_needed_file_upload_power = 33004,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_file_download_power: TBD
     */
    i_needed_modify_power_ft_file_download_power = 33005,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_needed_file_download_power: TBD
     */
    i_needed_modify_power_ft_needed_file_download_power = 33006,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_file_delete_power: TBD
     */
    i_needed_modify_power_ft_file_delete_power = 33007,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_needed_file_delete_power: TBD
     */
    i_needed_modify_power_ft_needed_file_delete_power = 33008,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_file_rename_power: TBD
     */
    i_needed_modify_power_ft_file_rename_power = 33009,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_needed_file_rename_power: TBD
     */
    i_needed_modify_power_ft_needed_file_rename_power = 33010,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_file_browse_power: TBD
     */
    i_needed_modify_power_ft_file_browse_power = 33011,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_needed_file_browse_power: TBD
     */
    i_needed_modify_power_ft_needed_file_browse_power = 33012,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_directory_create_power: TBD
     */
    i_needed_modify_power_ft_directory_create_power = 33013,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_needed_directory_create_power: TBD
     */
    i_needed_modify_power_ft_needed_directory_create_power = 33014,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_quota_mb_download_per_client: TBD
     */
    i_needed_modify_power_ft_quota_mb_download_per_client = 33015,

    // ADD DOCS
    /**
     * i_needed_modify_power_ft_quota_mb_upload_per_client: TBD
     */
    i_needed_modify_power_ft_quota_mb_upload_per_client = 33016
}
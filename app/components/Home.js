import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import JsonTable from 'react-json-table';
import Json from 'react-json';








const JsonRespones = {
    "next_offset": -1,
    "records": [
        {
            "my_favorite": false,
            "id": "LW-Z6R2QOJ",
            "name": "LW-Z6R2QOJ",
            "date_modified": "2017-07-03T12:50:56+00:00",
            "description": "STG forecaster",
            "assigned_user_id": "13e0e86f-7fb8-9e80-70c3-58bd7a6cc971",
            "assigned_user_employee_cnum": "AVL4GU672",
            "assigned_user_user_name": "scmtest5@cn.ibm.com",
            "assigned_user_name": "SCMobile (SCMobile) Manual5",
            "account_name": "ＡＥＯＮ信息系统集成（杭州）有限公司",
            "account_id": "59f99dd0-e06a-d12c-3cbf-5799b9d73a3a",
            "lead_source": "CSSR",
            "amount": "30222.000000",
            "base_rate": 1,
            "currency_id": "-99",
            "date_closed": "2017-09-05",
            "sales_stage": "04",
            "best_case": "0.000000",
            "worst_case": "0.000000",
            "commit_stage": "",
            "opportun_winplans": {
                "next_offset": -1,
                "records": [
                    {
                        "id": "3fb1a01a-529a-413e-45e9-5959dd3fa9da",
                        "date_modified": "2017-07-05T05:32:58+00:00",
                        "_acl": {
                            "fields": {
                                "s03_igf_client_fin_id": {
                                    "read": "yes"
                                },
                                "s03_igf_credit_check": {
                                    "read": "yes"
                                },
                                "s03_igf_bus_val_descr": {
                                    "read": "yes"
                                },
                                "s03_igf_fin_prop_draft": {
                                    "read": "yes"
                                },
                                "s03_igf_fin_competition": {
                                    "read": "yes"
                                },
                                "s03_igf_direct_fin_rel": {
                                    "read": "yes"
                                },
                                "s03_igf_comments": {
                                    "read": "yes"
                                },
                                "s04_igf_fin_decision": {
                                    "read": "yes"
                                },
                                "s04_igf_reviewers_approvers": {
                                    "read": "yes"
                                },
                                "s04_igf_review_appr_date": {
                                    "read": "yes"
                                },
                                "s04_igf_comments": {
                                    "read": "yes"
                                },
                                "s05_igf_grop_delivery": {
                                    "read": "yes"
                                },
                                "s05_igf_grop_delivery_date": {
                                    "read": "yes"
                                },
                                "s05_igf_agreed_term": {
                                    "read": "yes"
                                },
                                "s05_igf_comments": {
                                    "read": "yes"
                                },
                                "s06_igf_signed_contract": {
                                    "read": "yes"
                                },
                                "s06_igf_comments": {
                                    "read": "yes"
                                },
                                "my_favorite": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "favorite_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "date_entered": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "date_modified": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "modified_user_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "modified_by_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "created_by": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "created_by_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "doc_owner": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "user_favorites": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "description": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "deleted": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "created_by_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "modified_user_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "activities": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "assigned_user_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "assigned_user_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "assigned_user_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportun_winplans": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_id_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "overall_progress": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "noticed_ldentifying": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "identified_validating": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "validated_qualifying": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "qualified_gaining_conditional_agreement": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "conditionally_agreed_winning": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "executive_sponsor": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "brand_sponsors": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "brand_sponsor_names": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "snd_sponsor": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "include_igf": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "international_deal": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "lts_opportunity": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "progress_complete": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_client_needs_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_client_needs_id_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_sow_drafted": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_sow_drafted_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_unique_bus_value": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_unique_bus_descr": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_comments": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_roi_tco_analysis": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_rfp_released": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_value_proposition": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_perf_criteria_conf": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_init_benefits": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_reason_to_act": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_reason_to_act_descr": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_access_to_power": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_power_sponsor_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_power_sponsor_role": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_letter_to_power_sponsor_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_letter_from_power_sponsor_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_reviewers_approvers": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_reviewers_approvers_names": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_review_appr_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_cvdm_sess_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_cvdm_sess_date_na": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_prog_call_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_prog_call_date_na": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_comments": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_prop_delivery_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_budget_secure": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_price_agreement": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_solution_assur_itar": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_pricing_secured": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_pricing_secured_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_team_engaged": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_comments": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s06_signed_contract": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s06_comments": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "nextSalesTask": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_owner_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_owner_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_owner_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "assigned_bp_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_description": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "total_amount": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "account_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "account_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "opportunity_currency_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "current_sales_stage": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "custom_label1": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "custom_label2": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "custom_label4": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "custom_label5": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "custom_label6": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "executive_sponsor_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "executive_sponsor_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "snd_sponsor_name": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "snd_sponsor_link": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "winplans_revenuelineitems": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "winplans_rliwps": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "currency_id": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_1_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_2_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_3_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_4_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_5_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_6_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_7_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_8_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_9_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_check_10_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_currency_1_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_currency_2_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_currency_3_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_currency_4_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_currency_5_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_date_1_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_date_2_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_date_3_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_date_4_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_date_5_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_1_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_2_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_3_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_4_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_5_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_6_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_7_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_8_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_9_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_dropdown_10_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_1_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_2_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_3_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_4_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_5_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_6_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_7_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_8_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_9_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textarea_10_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_1_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_2_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_3_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_4_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_5_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_6_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_7_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_8_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_9_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "ext_win_plan_textfield_10_c": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s02_complete": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s02_total": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_complete": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_total": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_complete": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_total": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_complete": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_total": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s06_complete": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s06_total": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_client_has_need_understood": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_client_has_need_understood_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s03_unique_bus_value_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_roi_tco_analysis_ra": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_roi_tco_analysis_ra_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_rfp_released_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_perf_criteria_conf_ra": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_perf_criteria_conf_ra_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_init_benefits_ra": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_init_benefits_ra_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_reason_to_act_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_access_to_power_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_letter_to_power_sponsor": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_letter_from_power_sponsor": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_cvdm_sess": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_prog_call": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_sow_drafted": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_sow_drafted_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_client_val_meets": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_client_val_meets_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_sponsor_know_sol": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_sponsor_know_sol_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_high_est": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_high_est_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_sponsor_commit": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s04_sponsor_commit_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_board_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_board_date_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_budget_secure_ra": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_budget_secure_ra_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_price_agreed": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_price_agreed_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_solution_assur_itar_ra": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_solution_assur_itar_ra_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_team_engaged_ra": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_team_engaged_ra_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_key_tc_agreed": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_key_tc_agreed_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_close_date_agreed": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_close_date_agreed_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_client_appr_iden": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_client_appr_iden_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_client_final_approver": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_competitive_status": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_client_inter_obt": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_client_inter_obt_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_work_council_rec": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_work_council_rec_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_scope_agreed": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_scope_agreed_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_staffing_plan": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_staffing_plan_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_due_dili_completed": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_due_dili_completed_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s05_proposal_process_applied": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s06_signed_contract_ra": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "s06_signed_contract_ra_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "last_updating_system": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                },
                                "last_updating_system_date": {
                                    "read": "yes",
                                    "write": "yes",
                                    "create": "yes"
                                }
                            },
                            "edit": "yes",
                            "delete": "yes"
                        },
                        "_module": "ibm_Winplans"
                    }
                ]
            },
            "solution_codes_c": [
                "CLD&COG:Cloud & Cognitive Related Codes|ACTINSIG:CLD&COG: Transform processes w/ insights"
            ],
            "tags": "",
            "campaign_code_c": [],
            "reason_lost_c": "",
            "reason_won_c": "",
            "acceptance_due_date": "",
            "owner_acceptance_status_c": "none",
            "pcontact_id_c": "aaaa aaaaa",
            "cmr_c": "761771",
            "contact_id_c": "b1977bf77bb5949",
            "bp_om_ownership_enabled": "",
            "assigned_bp_id": "",
            "cmr_id": "59f99dd0-e06a-d12c-3cbf-5799b9d73a3a",
            "bp_sales_stage": "",
            "match_bp_sales_stage": "",
            "assigned_bp_name": "",
            "_acl": {
                "subpanel_action": "yes",
                "edit_if_not_bp": "yes",
                "is_add_me_button_able": "yes",
                "copy": "yes",
                "fields": {
                    "bp_sales_stage": {
                        "write": "no",
                        "create": "no"
                    },
                    "bp_private_opportunity": {
                        "write": "no",
                        "create": "no"
                    },
                    "acceptance_due_date": {
                        "write": "no",
                        "create": "no"
                    }
                }
            },
            "_module": "Opportunities",
            "_search": {
                "score": []
            }
        },
        ]
}
























const items = [
	{       
		"my_favorite": false,
        "id": "LW-Z6R2QOJ",
        "name": "LW-Z6R2QOJ",
        "date_modified": "2017-07-03T12:50:56+00:00",
        "description": "STG forecaster",
        "assigned_user_id": "13e0e86f-7fb8-9e80-70c3-58bd7a6cc971",
        "assigned_user_employee_cnum": "AVL4GU672",
        "assigned_user_user_name": "scmtest5@cn.ibm.com",
        "assigned_user_name": "SCMobile (SCMobile) Manual5",
        "account_name": "ＡＥＯＮ信息系统集成（杭州）有限公司",
        "account_id": "59f99dd0-e06a-d12c-3cbf-5799b9d73a3a",
        "lead_source": "CSSR",
        "amount": "30222.000000",
        "base_rate": 1,
        "currency_id": "-99",
        "date_closed": "2017-09-05",
        "sales_stage": "04",
        "best_case": "0.000000",
        "worst_case": "0.000000",
        "commit_stage": "",

    },
    {
        	"my_favorite": false,
            "id": "4N-A644ISQ",
            "name": "4N-A644ISQ",
            "date_modified": "2017-05-18T09:06:14+00:00",
            "description": "Yu",
            "assigned_user_id": "13e0e86f-7fb8-9e80-70c3-58bd7a6cc971",
            "assigned_user_employee_cnum": "AVL4GU672",
            "assigned_user_user_name": "scmtest5@cn.ibm.com",
            "assigned_user_name": "SCMobile (SCMobile) Manual5",
            "account_name": "name",
            "account_id": "b2899844-8917-705f-8b09-591c0b0b7df6",
            "lead_source": "DDRHW",
            "amount": "0.000000",
            "base_rate": 1,
            "currency_id": "-99",
            "date_closed": "2017-08-16",
            "sales_stage": "03",
            "best_case": "0.000000",
            "worst_case": "0.000000",
            "commit_stage": "",
    }
];





const Home = () => (
	<JsonTable rows={ items } />
);


export default Home;